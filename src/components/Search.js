import React, { useState, useEffect } from 'react'
import { MDBCol } from 'mdbreact'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Search = ({ searchedRecipe, setSearchedRecipe }) => {

  const [changedSearch, setChangedSearch] = useState('')

  const [categories, setCategories] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [selectedFilter, setSelectedFilter] = useState([])

  // Pete working on:
  const handleChange = (e) => {
    setChangedSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    setSearchedRecipe(changedSearch)
  }

  // useEffect(() => {
  //   console.log('categories=>', categories)
  // }, [categories])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/search.php?s=')
        setCategories(data.meals)
      } catch (err) {
        console.log(err)
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    if (categories.length) {
      const filteredCategories = []
      categories.forEach(meal => {
        filteredCategories.indexOf(meal.strCategory) === -1 && filteredCategories.push(meal.strCategory)
      })
      console.log(`filtered Categories ${filteredCategories}`)
      setFilteredList(filteredCategories)
    }
  }, [categories])

  const updateFilter = (e) => {
    const selectedFilter = categories.filter(recipe => recipe.strCategory === e.target.value)
    setSelectedFilter(selectedFilter)
  }

  //Working currently on displaying divs
  const shownMeal = []

  const getRecipies = () => {
    if (shownMeal.length < 6) {
      (selectedFilter.length ? selectedFilter : categories).map((meal, i) => {
        return shownMeal.push(meal)
      })
    } else console.log('more to show')
  }
  getRecipies()
  const displayedMeals = (shownMeal.slice(0, 6))


  return (
    <>
      <MDBCol md="6" className='search-bar'>
        <h3>Search for recipes</h3>
        <p>Maecenas sollicitudin porta nibh, ut gravida eros dapibus nec.</p>
        <input onChange={handleChange} type="text" placeholder="Search" aria-label="Search" />
        <input onClick={handleSubmit} type="submit" value="Submit" name="submit" />
      </MDBCol>
      <Container>
        <select onChange={updateFilter}>
          {filteredList.map((strCategory, i) => {
            return <option key={i} value={strCategory} name={strCategory}>{strCategory}</option>
          })}
        </select>
      </Container>
      <Row>
        {displayedMeals.map((meal, i) =>
          <Col key={i} id={i} className='mb-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} />
              <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Search;