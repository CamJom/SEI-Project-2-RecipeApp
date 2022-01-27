import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeaturedRecipe from './FeaturedRecipe'
import Search from './Search'
import Categories from './Categories'
import RecipeCard from './RecipeCard'

function Home() {

  const [searchResult, setSearchResult] = useState('')
  const [heroIsVisible, setHeroIsVisible] = useState(true)

  useEffect(() => {
    console.log('searchResult=>', searchResult)
    if (searchResult !== '') {
      setHeroIsVisible(false)
    }
  }, [searchResult])

  return (
    <Container className="mt-4">
      {heroIsVisible &&
        <Row>
          <Col sm={8}>
            <FeaturedRecipe />
          </Col>
          <Col sm={4}>
            <h3>The Recipe App</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin porta nibh, ut gravida eros dapibus nec. Cras sed volutpat sapien. Nam tellus ipsum, tempus at varius ac, ultricies in nibh. Pellentesque sed eleifend ex.</p>
          </Col>
        </Row>
      }
      <Row className='mt-4 mb-4 search-container'>
        <Search searchResult={searchResult} setSearchResult={setSearchResult} />
      </Row>
      <Row className='mb-4'>
        <RecipeCard searchResult={searchResult} />
      </Row>
      <Row className='mt-4'>
        <Categories />
      </Row>
    </Container>
  )
}

export default Home