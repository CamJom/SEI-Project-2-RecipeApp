import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const SiteNavbar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Recipe App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/random">Random recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar