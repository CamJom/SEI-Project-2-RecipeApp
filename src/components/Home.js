import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeaturedRecipe from './FeaturedRecipe'
import Search from './Search'
import RecipeCard from './RecipeCard'

function Home() {

  const [searchedRecipe, setSearchedRecipe] = useState('')

  useEffect(() => {
    console.log('searched recipe=>', searchedRecipe)
  }, [searchedRecipe])

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={8}>
          <FeaturedRecipe />
        </Col>
        <Col sm={4}>
          <h3>The Recipe App</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin porta nibh, ut gravida eros dapibus nec. Cras sed volutpat sapien. Nam tellus ipsum, tempus at varius ac, ultricies in nibh. Pellentesque sed eleifend ex.</p>
        </Col>
      </Row>
      <Row className='mt-4 mb-4 search-container'>
        <Search searchedRecipe={searchedRecipe} setSearchedRecipe={setSearchedRecipe} />
      </Row>
      <Row>
        <RecipeCard searchedRecipe={searchedRecipe} />
      </Row>
    </Container>
  )
}

export default Home