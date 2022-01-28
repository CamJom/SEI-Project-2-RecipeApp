import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import spinner from '../assets/images/Spinner.gif'

const Search = ({ searchResult, setSearchResult }) => {
  const [recipes, setRecipes] = useState([])
  const [hasError, setHasError] = useState({
    error: false,
    message: ''
  })

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/search.php?s=')
        setRecipes(data.meals)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getRecipes()
  }, [])

  useEffect(() => {
    if (recipes.length) {
      const categoryListItems = []
      recipes.forEach(meal => {
        categoryListItems.indexOf(meal.strCategory) === -1 && categoryListItems.push(meal.strCategory)
      })
      console.log(`category list ${categoryListItems}`)
    }
  }, [recipes])

  const handleSearch = (e) => {
    setSearchResult(e.target.value)
    console.log('search result=>', searchResult)
  }

  return (
    <>
      <Container className='mt-4'>
        <Row className="d-flex justify-content-center">
          <Col sm={8} className='mb-4 home-search'>
            {recipes.length ?
              (
                <>
                  <h2>Search for recipes</h2>
                  <p> Got a dish in mind? see if we have it by typing the name below! </p>
                  <input onChange={handleSearch} type="text" placeholder="Search" aria-label="Search" />
                </>
              )
              :
              (hasError.error ? <h4 className='text-danger text-center'>{hasError.message}</h4> : <img src={spinner} alt={spinner} />)
            }
          </Col>
        </Row>
      </Container>
      <Row>
      </Row>
    </>
  )
}

export default Search;