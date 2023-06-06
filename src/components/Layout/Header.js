import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=> {
  return (
    <>
       <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                    <Nav.Link href="#store">STORE</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                </Nav>
            </Container>
            <HeaderCartButton onClick={props.onShowCart}/>
            <h2>.</h2>
       </Navbar>
       
    </>
  )
}

export default Header
