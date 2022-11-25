import React from "react";
import { Navbar,Container,Nav,Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () =>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Calculate</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Root Of Equation"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
              <NavDropdown.Item href="/falsePosition">False Position</NavDropdown.Item>
              <NavDropdown.Item href="/onepoint">One-point Iteration</NavDropdown.Item>
              <NavDropdown.Item href="/newton">Newton Raphson</NavDropdown.Item>
              <NavDropdown.Item href="/secant">Secant Method</NavDropdown.Item>
              <NavDropdown.Item href="/mytest">Mytest</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Linear Algebra"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/cramer">Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item href="/gaussEliminate">Gauss Elimination</NavDropdown.Item>
              <NavDropdown.Item href="/matrixInverse">Matrix Inverse</NavDropdown.Item>
              
            </NavDropdown>
            
            
            
          </Nav>
        </Container>
      </Navbar>
    );
}
export default NavBar;