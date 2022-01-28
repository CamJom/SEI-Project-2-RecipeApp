// import React, { useState, useEffect } from 'react'
// import { MDBCol } from 'mdbreact'
// import axios from 'axios'

// useEffect(() => {
//   const getCategories = async () => {
//     try {
//       const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/search.php?s=')
//       setCategories(data.meals)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   getCategories()
// }, [])

// useEffect(() => {
//   if (categories.length) {
//     const filteredCategories = []
//     categories.forEach(meal => {
//       filteredCategories.indexOf(meal.strCategory) === -1 && filteredCategories.push(meal.strCategory)
//     })
//     console.log(`filtered Categories ${filteredCategories}`)
//     setFilteredList(filteredCategories)
//   }
// }, [categories])

// const updateFilter = (e) => {
//   const selectedFilter = categories.filter(recipe => recipe.strCategory === e.target.value)
//   setSelectedFilter(selectedFilter)
// }

// const shownMeal = []