import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=> {
  return (
    <>
       <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/product">STORE</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/contact_us">CONTACTUS</Nav.Link>
                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                </Nav>
            </Container>
            <HeaderCartButton onClick={props.onShowCart}/>
            <h2>.</h2>
       </Navbar>
       
    </>
  )
}

export default Header
