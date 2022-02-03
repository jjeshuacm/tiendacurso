import React from 'react';

const Item = ({id, name, stock, category, price}) => {
    // console.log(name, stock, category, price, id);
  return (
            <>
            <h1>{name}</h1>
            <h4>Category: {category}</h4>
            <h4>Stock: $ {stock}</h4>
            <h4>Price: {price}</h4>
         
            </>
            
            );
};

export default Item;
