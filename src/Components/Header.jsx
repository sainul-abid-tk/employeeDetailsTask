import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <div >
       <Navbar  bg='primary' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='fs-4 fw-bold fst-italic'>Emplo<span style={{color:'violet'}}>yees</span></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='fs-6 me-3 ' href="/">Home</Nav.Link>
            <Nav.Link className='fs-6 me-3 ' href="/">About</Nav.Link>
            <Nav.Link className='fs-6 me-3 ' >Services</Nav.Link>
            <Nav.Link className='fs-6 me-3 ' >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header