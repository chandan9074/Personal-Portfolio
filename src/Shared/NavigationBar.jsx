import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ck_logo from './../pictures/ck_logo_nav.png';
import './nav.css';

const NavigationBar = () => {
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home"><img className="ck_logo_img" src={ck_logo} alt="ck_logo..." /></Navbar.Brand>
            <Nav className="me-auto md:mx-auto">
            <Nav.Link><Link to="/" className="nav-btn">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/contactme" className="nav-btn">Contact Me</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
     );
}
 
export default NavigationBar;