import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import YoutubeEmbed from './Iframe'

const ShowRecipe = () => {
  const { idMeal } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        setRecipe(data)
      } catch (err) {
        console.log(err)
      }
    }
    getRecipe()
  }, [idMeal])

  useEffect(() => {
    console.log('meal id =>', idMeal)
    console.log('recipe=>', recipe)
  }, [idMeal, recipe])

  const ingredients = () => {
    const filteredIngredients = recipe && (Object.entries(recipe.meals[0]).filter(arr => arr[0].includes('Ingredient')).filter(arr => arr[1]))
    console.log('filtered=>', filteredIngredients)
    const filteredMeasures = recipe && (Object.entries(recipe.meals[0]).filter(arr => arr[0].includes('Measure')).filter(arr => arr[1]))
    const mapped = filteredMeasures && filteredMeasures.map(arr => {
      return arr[1]
    })
    return (
      <ul>
        {filteredIngredients && filteredIngredients.map((ingredient, index) => {
          return <li key={index}>{ingredient[1]} - {mapped[index]}</li>
        })}
      </ul>
    )
  }

  return (
    <Container>
      <Row>
        <h2>{recipe && recipe.meals[0].strMeal}</h2>
        <hr />
      </Row>
      <Row>
        <Col sm={4}>
          <img src={recipe && recipe.meals[0].strMealThumb} alt={recipe && recipe.meals[0].strMeal} className='recipe-image' />
        </Col>
        <Col sm={8}>
          <h4>Ingredients</h4>
          {ingredients()}
          <hr />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={8}>
          <p>{recipe && recipe.meals[0].strInstructions}</p>
        </Col>
        <Col sm={4}><YoutubeEmbed embedURL={recipe && recipe.meals[0].strYoutube.replace('watch?v=', 'embed/')} /></Col>
      </Row>
    </Container>
  )
}

export default ShowRecipe