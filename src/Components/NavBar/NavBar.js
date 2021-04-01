import React from 'react';
import {Navbar ,Nav , NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
           
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="games">Games</Nav.Link>
      <Nav.Link href="status">Status</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="SignIn">Sign in</Nav.Link>
      <Nav.Link eventKey={2} href="SignUp">
        Sign up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;