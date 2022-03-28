import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component{
render(){
return(
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Shopping Online</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action1">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Office Supply</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Books and Magazines</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Outlet</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Look for anything!"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
      <Nav
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <NavDropdown title="Hello, Bianca!" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action5">My profile</NavDropdown.Item>
          <NavDropdown.Item href="#action6">My orders</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Sign out</NavDropdown.Item>
        </NavDropdown>
        </Nav>        
    </Navbar.Collapse>
  </Container>
</Navbar>
)}
}