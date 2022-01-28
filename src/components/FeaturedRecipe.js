import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function FeaturedRecipe() {

  const [featuredOne, setFeaturedOne] = useState([])
  const [featuredTwo, setFeaturedTwo] = useState([])
  const [linkOne, setLinkOne] = useState()
  const [linkTwo, setLinkTwo] = useState()


  useEffect(() => {
    const getFeatured = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/random.php')
        setFeaturedOne(data)
        setLinkOne(data.meals[0].idMeal)
      } catch (err) {
        console.log(err)
      }
    }
    getFeatured()
  }, [])

  useEffect(() => {
    const getFeatured2 = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/random.php')
        setFeaturedTwo(data)
        setLinkTwo(data.meals[0].idMeal)
      } catch (err) {
        console.log(err)
      }
    }
    getFeatured2()
  }, [])

  console.log('featured One recipe =>', linkOne)
  console.log('featured 2 recipe =>', linkTwo)

  return (

    <Row>
      <Container className="home-image">
        {featuredOne && featuredTwo &&
          <Carousel>
            <Carousel.Item>
              <Link to={featuredOne && `/recipes/${linkOne}`}>
                <img
                  className="featured-img d-block w-100"
                  src={featuredOne.meals && featuredOne?.meals[0].strMealThumb}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{featuredOne.meals && featuredOne.meals[0].strMeal}</h3>
                  <p>A {featuredOne.meals && featuredOne.meals[0].strArea} {featuredOne.meals && featuredOne.meals[0].strCategory} Dish</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={featuredTwo && `/recipes/${linkTwo}`}>
                <img
                  className="featured-img d-block w-100"
                  src={featuredTwo.meals && featuredTwo.meals[0].strMealThumb}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>{featuredTwo.meals && featuredTwo?.meals[0].strMeal}</h3>
                  <p>{featuredTwo.meals && featuredTwo?.meals[0].strArea} {featuredTwo.meals && featuredTwo.meals[0].strCategory} Dish</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          </Carousel>
        }
      </Container>
    </Row>
  )
}

export default FeaturedRecipe