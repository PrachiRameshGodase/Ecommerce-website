import React, {useContext} from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton'
import AuthContext from "../../store/auth-context";

const Header=(props)=> {
  const authctx=useContext(AuthContext)

  const isLoggedIn=authctx.isLoggedIn;

  const logOutHandler=()=>{
    authctx.logout();
    console.log("u are logout")
  }
  return (
    <>
       <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/product">STORE</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/contact_us">CONTACTUS</Nav.Link>
                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                </Nav>
                {isLoggedIn && (<li>
            <Button variant="danger" onClick={logOutHandler}>Logout</Button>
          </li>)}
            </Container>
            <HeaderCartButton onClick={props.onShowCart}/>
           
            <h2>.</h2>
       </Navbar>
       
    </>
  )
}

export default Header
