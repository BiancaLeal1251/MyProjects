import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends React.Component{
  render(){
    return(
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <i className="fa fa-medkit icon-navbar"></i>
            <span>COVID-19 Updates</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
          )
}}
