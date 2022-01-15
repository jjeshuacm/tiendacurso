import React from 'react';
// import PropTypes from 'prop-types';

export const ItemListContainer = ({greetings = 'no se ha recibido'}) => {

    return (
        <section>
                <h1>ItemList</h1>
                <h1>{greetings}</h1>
        </section>
    )
}

// ItemListContainer.prototype = {
//     greetings: PropTypes.string.isRequired
// }

// ItemListContainer.defaultProps = {
//     greetings: 'soy un valor por defecto'
// }
