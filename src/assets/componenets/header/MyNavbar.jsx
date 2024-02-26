import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import './transtion';

const MyNavbar = () => {
  return (
    <div >
        <Navbar expand="lg" className=' border_color sticky-top  bg-dark'  >
      <Container fluid className='pt-3'>
        <Navbar.Brand href="#" className='px-5 fw-bolder fs-3 text-white ms-5'>KnightOne</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className=" my-lg-0 ms-auto mx-5 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"className='text-white fs-5'>Home</Nav.Link>
            <Nav.Link href="#action2"className='text-white fs-5'>about</Nav.Link>
            <Nav.Link href="#action1"className='text-white fs-5'>services</Nav.Link>
            <Nav.Link href="#action2"className='text-white fs-5'>portfolio</Nav.Link>
            <Nav.Link href="#action2"className='text-white fs-5'>pricing</Nav.Link>
            <NavDropdown title={
        <span className="text-white my-auto fs-5">Dropdown</span>
    } >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2"className='text-white fs-5'> contact </Nav.Link>
          </Nav>
            <Button variant="success rounded-5" className='ms-auto me-5 fs-5 px-4'>get started</Button>
        </Navbar.Collapse>
      </Container>
      </Navbar>


    </div>
  )
}

export default MyNavbar