import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';  
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import {getFirestore ,getDoc, doc} from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {iDetalles} = useParams();
    const [productDetail,setProductDetail] = useState({});
    // const iDetalles = 1;
  
  //usar el contexto y usar dos retornos
  const {cartList} = useCartContext();
  //     const categoria = 'Beisbol';
   console.log("intemDetailC",cartList);
  
    useEffect(() => {

    const db = getFirestore();
    const itemRef = doc(db,'items',iDetalles);
    getDoc(itemRef)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
    .catch((err) => console.log(err));
    



        // getProducts()
        //   .then((data) => {
             
        //     setProduct(data.find((item) => item.id === Number(iDetalles)));
        //   })
        //   .catch((err) => console.log(err));
      }, [iDetalles]);

   

      return (
        <>
          <ItemDetail product={product} />
        </>
      )
    };
