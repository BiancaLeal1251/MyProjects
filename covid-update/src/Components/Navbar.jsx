import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component{
  render(){
    return(
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">COVID-19 Updates</Navbar.Brand>
        </Container>
      </Navbar>
          )
}}
