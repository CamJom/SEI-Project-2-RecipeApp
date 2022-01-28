import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logoImg from '../assets/images/recipe-app-logo.png'


const SiteNavbar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logoImg} alt="recipe-app-logo" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/browse">Browse all recipes</Nav.Link>
          <Nav.Link href="/random">Random recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar