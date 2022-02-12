import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';  
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {iDetalles} = useParams();
    // const iDetalles = 1;
  
  //usar el contexto y usar dos retornos
  const {cartList} = useCartContext();
  //     const categoria = 'Beisbol';
   console.log("intemDetailC",cartList);
  
    useEffect(() => {
        getProducts()
          .then((data) => {
             
            setProduct(data.find((item) => item.id === Number(iDetalles)));
          })
          .catch((err) => console.log(err));
      }, [iDetalles]);
    
      return (
        <>
          <ItemDetail product={product} />
        </>
      )
    };
