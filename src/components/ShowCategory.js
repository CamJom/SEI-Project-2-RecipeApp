import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const ShowCategory = () => {

  // const [category, setCategory] = useState('')
  const { strCategory } = useParams()
  const [recipes, setRecipes] = useState([])
  const [categoryFilter, setCategoryFilter] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/search.php?s=')
        setRecipes(data.meals)
      } catch (err) {
        console.log(err)
      }
    }
    getRecipes()
  }, [])

  useEffect(() => {
    if (strCategory) {
      const filteredRecipes = recipes.filter(recipe => {
        return recipe.strCategory.includes(strCategory)
      })
      setCategoryFilter(filteredRecipes)
    }
  }, [strCategory, recipes])


  return (
    <>
      <Container className='mt-4'>
        <Row className='mb-4'>
          <Link to="/">
            <Button className='brand-button'>Back to home</Button>
          </Link>
        </Row>
        <Row>
          {categoryFilter.map((recipe, i) =>
            <Col key={i} id={i} className='mb-4'>
              <Card style={{ width: '14rem' }}>
                <Link to={`/recipes/${recipe.idMeal}`}>
                  <Card.Img variant="top" src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <Card.Body>
                    <Card.Title>{recipe.strMeal}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          )
            // (shownMeal.length >= 6) && <button>Show More</button>
          }
        </Row>
      </Container >
    </>
  )
}

export default ShowCategory