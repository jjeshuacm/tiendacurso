import React from 'react';
// import { useCartContext } from '../context/CartContext';
import Item from '../Item/Item';


const ItemList = ({listProducts}) => {

       //usar el contexto y usar dos retornos
      //  const {cartList} = useCartContext();
       //     const categoria = 'Beisbol';
        // console.log("itenlist",cartList);

    return (<>



              {    
                listProducts.map((el) =>  
                     (
                       <Item  
                        key={el.id} 
                        imagenUrl={el.imagenUrl}
                        name={el.name} 
                        price={el.price} 
                        category={el.category} 
                        stock={el.stock} 
                        id={el.id} 
                        />
                     )
                  )
                
              }
              
        </>);
};

export default ItemList;
