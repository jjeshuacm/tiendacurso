import React from 'react';
import { ItemCount } from './ItemCount/ItemCount';
// import PropTypes from 'prop-types';

export const ItemListContainer = ({greetings = 'no se ha recibido'}) => {

    function onAdd(cant){
        console.log(cant);
    }

    return (
        <section>
                <h1>ItemList</h1>
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
