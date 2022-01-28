import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import spinner from '../assets/images/Spinner.gif'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [hasError, setHasError] = useState({
    error: false,
    message: ''
  })

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/categories.php')
        setCategories(data.categories)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    console.log('is there an error?', hasError.error)
    console.log('is there an error?', hasError.message)
  }, [hasError])

  return (
    <Row>
      {categories.length ?
        (
          <>
            <h2>Find a recipe by category</h2>
            {categories.map((category, i) =>
              <Col key={i} id={i} className='mt-4'>
                <Card style={{ width: '18rem' }}>
                  <Link to={`/categories/${category.strCategory}`}>
                    <Card.Img variant="top" src={category.strCategoryThumb} alt={category.strCategory} />
                    <Card.Footer>
                      <Card.Title>{category.strCategory}</Card.Title>
                    </Card.Footer>
                  </Link>
                </Card>
              </Col>
            )
            }
          </>
        )
        :
        (hasError.error ? <h4 className='text-danger text-center'>{hasError.message}</h4> : <img src={spinner} alt={spinner} />)
      }
    </Row>
  )
}
export default Categories