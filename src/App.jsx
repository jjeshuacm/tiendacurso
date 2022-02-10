import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';


function App() {
  return (

    <BrowserRouter>
     

    


        <div className="App">
            <NavBar/>
            <Container >
                
                    <Routes>
                        <Route path='/'  element={ <ItemListContainer greetings="Venta de camiseta" />}  />
                        <Route path='/categoria/:categoria' element={ <ItemListContainer greetings="Venta de camiseta por categoria" />}  /> 
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
