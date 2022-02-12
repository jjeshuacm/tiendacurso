import React from 'react';
import './nav-bar.css';
import logo from '../../pintar.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';


import  './nav-bar.css';

 export const NavBar = () => {
    return (
        <>
       
        <Navbar collapseOnSelect expand="lg" bg="primary" className='borderColor' variant="dark">
            <Container>
               
                <Navbar.Brand >  
               
                     <img src={logo} className='widget'  alt='logo' /> Estampados
               
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                       
                           
                            <Nav.Link href='/' >  
                            INICIO
                            </Nav.Link>
                           
                         
                            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/categoria/Football">Football</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/categoria/Surf">Surf</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    <Link to="/categoria/Beisbol">Beisbol</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            {/* <Nav.Link eventKey={2} href="contacto">
                                CONTACTO
                            </Nav.Link> */}

                            <NavDropdown title="PERFIL" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link to="/api/Login">Ingresar</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    <Link to="/api/Register">Registro</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    <Link to="/api/Logout">Salir</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                      
                    </Navbar.Collapse>
                    <CartWidget className="widget"/>
            </Container>
        </Navbar>
        </>
    )
}

