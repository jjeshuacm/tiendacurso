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
               
                <Navbar.Brand href="/">  
                     <img src={logo} className='widget'  alt='logo' /> Estampados
                </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                            <Nav.Link href="/">INICIO</Nav.Link>

                            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/categoria/Football">Football</NavDropdown.Item>
                                <NavDropdown.Item href="/categoria/Surf">Surf</NavDropdown.Item>
                               
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/categoria/Beisbol">Beisbol</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="precios">PRECIOS</Nav.Link>
                           
                            <Nav.Link eventKey={2} href="contacto">
                                CONTACTO
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget className="widget"/>
            </Container>
        </Navbar>
        </>
    )
}

