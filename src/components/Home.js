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
          <Col sm={4} className="about-text">
            <h3>Welcome to the Recipe App!</h3>
            <p>Here we hold a handful of Internationally Interesting Iconic Incredible Ingestible Recipes for you to try!</p>
            <h6>Got the Specific Craving in mind?</h6>
            <p>Use our filter function to assist you in narrowing it down to one dish that will hit all those flavor notes!</p>
            <h6>Got a specific dish in mind?</h6>
            <p>Feel free to use our &apos;Browse all&apos; tab in navigation or search function in our home page to see if we have that recipe prepared!
              If not let us know, we&apos;ll see what we can do to get Granny&apos;s secret recipe to be added! </p>
            <h6>Not too fussed on what you want to make?</h6>
            <p>Have a Daring look at our &apos;Random Recipe&apos; picker in our navigation tab, it will surely give you a dish to behold!</p>
            <h6>Vegan?</h6>
            <p>…… I&apos;m sorry we're working on that but there is one dish we have that&apos;s PJRApp guaranteed that might be delicious!</p>
            <p>And Please Have a Pleasant Proper Playful Perouse of our Humble little App.</p>

          </Col>
        </Row>
      }
      <hr />
      <Row className='mt-4 mb-4 search-container'>
        <Search searchResult={searchResult} setSearchResult={setSearchResult} />
      </Row>
      <hr />
      <Row className='mt-4 mb-4'>
        <RecipeCard searchResult={searchResult} />
      </Row>
      <Row className='mt-4'>
        <Categories />
      </Row>
    </Container >
  )
}

export default Home