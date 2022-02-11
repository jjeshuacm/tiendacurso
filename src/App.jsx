import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import { AuthRouter } from './routers/AuthRouter';
import { Cart } from './components/Cart/Cart';
import { PageNotFound } from './components/PageNotFound';
import './App.css';



function App() {
  return (

    <BrowserRouter>
     

        <div className="App">
            <NavBar/>
            <Container >
                
                    <Routes>
                        {/* usar Navigate para redieccionar cuando ingrese el usuario a inicio  */}
                        {/* <Route exac path='/'  element={ <Navigate to="/api/login"/>}  /> */}
                        <Route exact path='/'  element={ <ItemListContainer greetings="Venta de camiseta" />}  />



                        <Route  path='/categoria/:categoria' element={ <ItemListContainer greetings="Venta de camiseta por categoria" />}  />
                        <Route path='/detalles/:iDetalles' element={ <ItemDetailContainer />}  />
                        {/* componente padre para rutas hijas o anidadas, ruta generica API para todos los hijos  */}
                        <Route path='/api/*' element={<AuthRouter/>} />
                        <Route path='/cart' element={<Cart/>} />
                        {/* cuando el usuario ingresa una ruta incorrecta */}
                        <Route path='*' element={<PageNotFound/>} />
                    </Routes>
              
                {/* <Row >
                    <Col sm={12}>   
                        <ItemDetailContainer />
                    </Col>
                </Row> */}
            </Container> 
       
        </div>

    </BrowserRouter>
  );
}

export default App;
