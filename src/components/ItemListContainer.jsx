import React, {useState, useEffect} from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import getProducts from '../helpers/getProducts';
// import PropTypes from 'prop-types';

export const ItemListContainer = ({greetings = 'no se ha recibido'}) => {
    const [listProducts,setListProducts] = useState([]);

    const categoryId = 'Beisbol';



    useEffect(()=>{
     getProducts()
     .then((data) => 
        setListProducts(   
            (categoryId) ?  data.filter(el => el.category === categoryId)  : data     
         )
        )
     .catch((err) => console.log(err));
    },[])

    function onAdd(cant){
        console.log(cant);
    }

    return (
        <section>
                <ItemList listProducts={listProducts}/>
                {/* <h1>ItemList</h1> */}
                <h1>{greetings}</h1>
               
                <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
        </section>
    )
}

// ItemListContainer.prototype = {
//     greetings: PropTypes.string.isRequired
// }

// ItemListContainer.defaultProps = {
//     greetings: 'soy un valor por defecto'
// }
