import React, {useState, useEffect} from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import getProducts from '../helpers/getProducts';
import { useParams } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';

// import PropTypes from 'prop-types';

export const ItemListContainer = ({greetings = 'no se ha recibido'}) => {
    const [listProducts,setListProducts] = useState([]);
    const {categoria} = useParams();





    useEffect(()=>{
     getProducts()
     .then((data) => 
        setListProducts(   
            (categoria) ?  data.filter(el => el.category === categoria)  : data     
         )
        )
     .catch((err) => console.log(err));
    },[categoria])


    


    return ( <>
                    <Row className="mt-4" >
                        <Col ><h1>{greetings}</h1></Col>
                    </Row>
                    <Row className="mt-4">
                        <ItemList listProducts={listProducts}/>
                    </Row>
               
                         
            </>    
    );
}

// ItemListContainer.prototype = {
//     greetings: PropTypes.string.isRequired
// }

// ItemListContainer.defaultProps = {
//     greetings: 'soy un valor por defecto'
// }
