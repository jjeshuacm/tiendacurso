import React, {useState, useEffect} from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import getProducts from '../helpers/getProducts';
import { useParams } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';
import {getFirestore , collection, getDocs , query, where} from 'firebase/firestore';

// import PropTypes from 'prop-types';

export const ItemListContainer = ({greetings = 'no se ha recibido'}) => {
    const [listProducts,setListProducts] = useState([]);
    // const [product,setProduct] = useState({});
    const [loading,setloading] = useState(true);
    const {categoria} = useParams();





    useEffect(()=>{
//conexion api key con BD
    const db = getFirestore();
    let queryFiltro = "";
    console.log(categoria);
    if(categoria===undefined){
        queryFiltro = collection(db,'items');
        
       
    }else{
        queryFiltro = query(collection(db,'items'), where('category','==',categoria));
    }
        getDocs(queryFiltro)
        .then(resp => setListProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})     )))
       .catch((err) => console.log(err))
     .finally(() => setloading(false));
     //completar data split




    //  getProducts()
    //  .then((data) => 
    //     setListProducts(   
    //         (categoria) ?  data.filter(el => el.category === categoria)  : data     
    //      )
    //     )
    //  .catch((err) => console.log(err))
    //  .finally(() => setloading(false));



    },[categoria])


    // console.log(listProducts);
    if(loading) {
        return (<><h2>Cargando página...</h2></>);
    }else{
        return (
            <> 
                <Row className="mt-4" >
                    <Col ><h1>{greetings}</h1></Col>
                </Row>
                <Row className="mt-4">
                    <ItemList listProducts={listProducts}/>
                </Row>
            </>    
        );
    }
}

   

// ItemListContainer.prototype = {
//     greetings: PropTypes.string.isRequired
// }

// ItemListContainer.defaultProps = {
//     greetings: 'soy un valor por defecto'
// }
