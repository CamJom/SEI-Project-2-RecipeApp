import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import RandomRecipe from './components/RandomRecipe'
import ShowRecipe from './components/ShowRecipe'

function App() {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/recipes/:idMeal" element={<ShowRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
