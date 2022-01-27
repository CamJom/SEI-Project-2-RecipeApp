import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

  useEffect(() => {
    console.log(randomRecipe.meals)
  }, [randomRecipe])

  return (
    <Container>
      {randomRecipe.meals ?
        <>
          <Row>
            <h1>{randomRecipe?.meals[0].strMeal}</h1>
          </Row>
          <Row>
            <Col>
              <img src={randomRecipe.meals[0].strMealThumb} alt={randomRecipe.meals[0].strMeal} />
            </Col>
            <Col>{randomRecipe.meals[0].strInstructions}
            </Col>
          </Row>
        </>
        :
        <p>Error</p>
      }

    </Container>
  )
}

export default RandomRecipe