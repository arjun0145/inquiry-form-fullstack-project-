import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";

export default function NavBar() {
  return (
    <div>
      {/* <div className="nav">
        <div id='logo'></div>
        <div className="ele"><h3 >
          <Link to='/App'><button>Home</button></Link></h3></div>
        <div className="ele"><h3>
          <Link to='/About'>About</Link></h3></div>
        <div className="ele"><h3>Contact</h3></div>
        <div className="ele"><h3>
         <Link to='/Alok'>Admin</Link></h3></div>
      </div> */}

      <Navbar bg="dark" expand="lg" className="navbar-dark text-light" >
        <Container>
          <Navbar.Brand href="#home">Universal-Informatics </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/App">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
             
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
