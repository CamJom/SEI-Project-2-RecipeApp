import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom'

const Search = ({ searchResult, setSearchResult }) => {
  const [recipes, setRecipes] = useState([])
  // const [categoryList, setCategoryList] = useState([])
  // const [category, setCategory] = useState('')

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
    if (recipes.length) {
      const categoryListItems = []
      recipes.forEach(meal => {
        categoryListItems.indexOf(meal.strCategory) === -1 && categoryListItems.push(meal.strCategory)
      })
      console.log(`category list ${categoryListItems}`)
      // setCategoryList(categoryListItems)
    }
  }, [recipes])


  // const getRecipies = () => {
  //   const shownMeal = []
  //   if (shownMeal.length < 6) {
  //     (selectedFilter.length ? selectedFilter : categories).map((meal, i) => {
  //       return shownMeal.push(meal)
  //     })
  //   } else console.log('more to show')
  //   setDisplayedMeals(shownMeal.slice(0, 6))
  // }
  // getRecipies()

  const handleSearch = (e) => {
    setSearchResult(e.target.value)
    console.log('search result=>', searchResult)
  }

  // const handleChange = (e) => {
  //   setCategory(e.target.value)
  // }

  // const categoryFilter = () => {
  //   if (category === false || category === 'All') {
  //     console.log(categoryFilter().splice(5))
  //     return recipes.splice(5)
  //   }
  //   return recipes.filter(recipe => {
  //     return recipe.strCategory.includes(category)
  //   }
  //   )
  // }
  // const searchFilter = () => {
  //   if (searchResult === false) {
  //     console.log(categoryFilter().splice(5))
  //     return categoryFilter().splice(5)
  //   }
  //   return categoryFilter().filter(recipe => {
  //     return recipe.strMeal.toLowerCase().includes(searchResult.toLowerCase())
  //   })
  // }



  return (
    <>
      <Container className='mt-4'>
        <Row>
          <Col sm={8}>
            <h2>Search for recipes</h2>
            <p>Maecenas sollicitudin porta nibh, ut gravida eros dapibus nec.</p>
            <input onChange={handleSearch} type="text" placeholder="Search" aria-label="Search" />
          </Col>
          {/* <Col sm={4}>
            <p>Filter by category</p>
            <select onChange={handleChange}>
              <option defaultValue>All</option>
              {categoryList.map((strCategory, i) => {
                return <option key={i} value={strCategory} name={strCategory}>{strCategory}</option>
              })}
            </select>
          </Col> */}
        </Row>
      </Container>
      <Row>
        {/* {searchFilter().map((recipe, i) =>
          <Col key={i} id={i} className='mt-4'>
            <Card style={{ width: '18rem' }}>
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
        } */}
      </Row>
    </>
  )
}

export default Search;