import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Categories = ({ searchResult, setSearchResult }) => {
  const [categories, setCategories] = useState([])
  // const [categoryList, setCategoryList] = useState([])
  // const [category, setCategory] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/categories.php')
        setCategories(data.categories)
      } catch (err) {
        console.log(err)
      }
    }
    getCategories()
  }, [])

  return (
    <Row>
      <h2>Find a recipe by category</h2>
      {categories && categories.map((category, i) =>
        <Col key={i} id={i} className='mt-4'>
          <Card style={{ width: '18rem' }}>
            <Link to={`/categories/${category.strCategory}`}>
              <Card.Img variant="top" src={category.strCategoryThumb} alt={category.strCategory} />
              <Card.Body>
                <Card.Title>{category.strCategory}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      )
      }
    </Row>
  )
}
export default Categories