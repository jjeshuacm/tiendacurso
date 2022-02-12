import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import { AuthRouter } from './routers/AuthRouter';
import { Cart } from './components/Cart/Cart';
import { PageNotFound } from './components/PageNotFound';
import  CartContextProvider  from './components/context/CartContext';
import './App.css';



function App() {

  console.log(CartContextProvider);
  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
            <NavBar/>
            <Container >
                    <Routes>
                        {/* usar Navigate para redieccionar cuando ingrese el usuario a inicio  */}
                        {/* <Route exac path='/'  element={ <Navigate to="/api/login"/>}  /> */}
                        <Route exact path='/'  element={ <ItemListContainer greetings="Venta de camiseta" />}  />
                        <Route exact  path='/categoria/:categoria' element={ <ItemListContainer  />}  />
                        <Route exact path='/detalles/:iDetalles' element={ <ItemDetailContainer />}  />
                        {/* componente padre para rutas hijas o anidadas, ruta generica API para todos los hijos  */}
                        <Route exact path='/api/*' element={<AuthRouter/>} />
                        <Route exact path='/cart' element={<Cart/>} />
                        {/* cuando el usuario ingresa una ruta incorrecta */}
                        <Route exact path='*' element={<PageNotFound/>} />
                    </Routes>
            </Container>  

                   
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
