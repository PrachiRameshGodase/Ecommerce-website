import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const authctx = useContext(AuthContext);

  const isLoggedIn = authctx.isLoggedIn;

  const logOutHandler = () => {
    authctx.logout();
    console.log("u are logout");
  };
  return (
    <>
      <Navbar
        fixed="top"
        className="bg-gradient-to-b from-violet-900 to-pink-400"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className={` text-gray-100 font-bold ${classes.logo}  text-xl`}
          >
            Online Shopping
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              STORE
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact_us">
              CONTACTUS
            </Nav.Link>
          </Nav>

          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-gradient-to-b from-red-600 via-red-500 to-red-800  hover:bg-purple-600 py-2 px-4 font-bold text-white rounded">
                LOGIN
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Button variant="danger" onClick={logOutHandler}>
              Logout
            </Button>
          )}
        </Container>
        {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
      </Navbar>
    </>
  );
};

export default Header;
