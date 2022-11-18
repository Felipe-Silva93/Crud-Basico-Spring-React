import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './styles.css';

const Header: React.FC=()=>{

    return(
    <Navbar bg="light" expand="lg">
   
        <Navbar.Brand href="#home">PaginaDeCRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item as ={Link} className ="nav-link" to ="/form">Formulario</Nav.Item>
            <Nav.Item  as={Link} className ="nav-link"  to ="/listing">crud</Nav.Item>
            <Nav.Item  as={Link} className ="nav-link"  to ="/Cadastro">cadastro</Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}


export default Header;