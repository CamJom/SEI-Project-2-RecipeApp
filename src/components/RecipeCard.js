import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const RecipeCard = ({ searchedRecipe }) => {

  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v2/9973533/search.php?s=${searchedRecipe}`)
        setRecipe(data)
      } catch (error) {
        console.log(error)
      }
    }
    getRecipes()
  }, [searchedRecipe])

  useEffect(() => {
    console.log(recipe)
  }, [recipe])

  return (
    <>
      {searchedRecipe ?
        <Container>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Link to={`/recipes/${recipe.meals[0].idMeal}`}>
                <Card.Img variant="top" src={recipe.meals && recipe.meals[0].strMealThumb} />
                <Card.Body>
                  <Card.Title>{recipe.meals && recipe.meals[0].strMeal}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Container>
        :
        <p></p>
      }
    </>
  )
}

export default RecipeCard