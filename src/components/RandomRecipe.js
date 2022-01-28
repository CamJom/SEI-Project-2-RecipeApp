import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import YoutubeEmbed from './Iframe'

function RandomRecipe() {

  const [randomRecipe, setRandomRecipe] = useState([])

  useEffect(() => {
    const getRandomRecipe = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        setRandomRecipe(data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomRecipe()
  }, [])

  const ingredients = () => {
    const filteredIngredients = randomRecipe.meals && (Object.entries(randomRecipe?.meals[0]).filter(arr => arr[0].includes('Ingredient')).filter(arr => arr[1]))
    console.log('filtered=>', filteredIngredients)
    const filteredMeasures = randomRecipe.meals && (Object.entries(randomRecipe?.meals[0]).filter(arr => arr[0].includes('Measure')).filter(arr => arr[1]))
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
        <h2>{randomRecipe?.meals && randomRecipe?.meals[0].strMeal}</h2>
        <hr />
      </Row>
      <Row>
        <Col sm={4}>
          <img src={randomRecipe?.meals && randomRecipe?.meals[0]?.strMealThumb} alt={randomRecipe?.meals && randomRecipe?.meals[0]?.strMeal} className='recipe-image' />
        </Col>
        <Col sm={8}>
          <h4>Ingredients</h4>
          {ingredients()}
        </Col>
      </Row>
      <Row className='mt-4'>
        <hr />
        <Col md={8}>
          <h4>Instructions:</h4>
          <ol>
            {randomRecipe.meals && randomRecipe?.meals[0].strInstructions.split('.').splice(0, randomRecipe.meals[0].strInstructions.split('.').length - 1).map(str => {
              return <li style={{ fontSize: '15px' }}>{str}</li>
            })}
          </ol>
        </Col>
        <Col md={4}><YoutubeEmbed embedURL={randomRecipe.meals && randomRecipe?.meals[0]?.strYoutube.replace('watch?v=', 'embed/')} /></Col>
      </Row>
    </Container>
  )
}

export default RandomRecipe