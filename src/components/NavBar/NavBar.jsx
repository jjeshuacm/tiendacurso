import React, {useState, useEffect} from 'react';
import './nav-bar.css';
import logo from '../../pintar.png';
import { Container, Navbar, Nav,NavLink, NavDropdown ,Button} from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import {getFirestore , collection, getDocs } from 'firebase/firestore';
import  './nav-bar.css';

 export const NavBar = () => {

    const {cantidad} = useCartContext();
    const [listCategory,setListCategory] = useState([]);
    const [loading,setloading] = useState(true);

    useEffect(()=>{
            const db = getFirestore();
            let queryFiltro = "";
            let categorys = [];
            let hash = {};
            queryFiltro = collection(db,'items');

            getDocs(queryFiltro)
                .then(resp => {
                        categorys = resp.docs.map( prod =>  ({id: prod.id, category: prod.data().category}));


                        setListCategory(categorys.filter(o => hash[o.category] ? false : hash[o.category] = true)) 

                       
                    }
                )
               .catch((err) => console.log(err))
             .finally(() => setloading(false));

   
          

        
            },[])

          
         
      

    return (
        <>
        {console.log("listado", listCategory)}


        {/* <Link id="RouterNavLink" style={None} to="/contact">anywords</Link>
        <NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink> */}
    
        <Navbar collapseOnSelect expand="lg" bg="primary" className='bg-dark' variant="dark">
            <Container fluid>
               
                <Navbar.Brand className="font-link">  Jhonfer Ilustraciones
                {/* <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="ESTAMPADOS"
                />
                    */}
               
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                       
                           
                        <Nav.Item>
                            
                        <Link to="/" className="text-light enlHref " >INICIO</Link>
                        </Nav.Item>
                            
                           
                            
                           
                         
                            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">

                                                        
                                {listCategory.map((el) =>(
 <Link to={`categoria/${el.category}`} className="dropdown-item" key={el.id}>{el.category}</Link>


                                ))}



                        

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
                    {/* si cantidad es distinta de cero muestra cantidad  */}
                    <Link to="/cart">
                        <Button variant="info">
                            {cantidad() !== 0  && `${cantidad()} ` } 
                        <CartWidget className="widget"/>
                        </Button>
                    </Link>
                        
             
  
  
                   
                   
            </Container>
        </Navbar>
        </>
    )
}

