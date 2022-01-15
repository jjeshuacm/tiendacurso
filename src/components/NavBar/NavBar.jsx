import React from 'react';
import './nav-bar.css';
import logo from '../../pintar.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';


import  './nav-bar.css';

 export const NavBar = () => {
    return (
        <>
       
        <Navbar collapseOnSelect expand="lg" bg="primary" className='borderColor' variant="dark">
            <Container>
               
                <Navbar.Brand href="#home">  
                     <img src={logo} className='widget'  alt='logo' /> Estampados
                </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Galeria</Nav.Link>
                                <NavDropdown title="Personaliza" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Opcion 0</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Opción 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Opción 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Opción 3</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Precios</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Contacto
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget className="widget"/>
            </Container>
        </Navbar>
        </>
    )
}

