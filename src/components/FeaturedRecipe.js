import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import homeImage from '../assets/images/home-image.jpg'

function FeaturedRecipe() {

  return (
    <Row>
      <Container className="home-image">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Featured recipe</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Featured recipe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Row>
  )
}

export default FeaturedRecipe