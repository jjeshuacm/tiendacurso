import React from 'react';

 const ItemDetail = (product) => {
     console.log(product);
    const { name, category, stock, price } = product.product;
    //  console.log(name);
  return (<>


  
      <h3>{name}</h3>
      <ul>
          <li>Category: {category} </li>
          <li>Category: {stock} </li>
          <li>Category: {price} </li>
      </ul>
     
    </>);
    };


export default ItemDetail;