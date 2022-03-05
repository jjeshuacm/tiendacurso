import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';  
import {Col, Row ,Spinner} from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import {getFirestore ,getDoc, doc} from 'firebase/firestore';
import {PageNotFound} from '../PageNotFound';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {iDetalles} = useParams();
    const [productDetail,setProductDetail] = useState({});
    const [loading,setloading] = useState(true);
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
    .catch((err) => console.log(err)).finally(() => setloading(false));
    



        // getProducts()
        //   .then((data) => {
             
        //     setProduct(data.find((item) => item.id === Number(iDetalles)));
        //   })
        //   .catch((err) => console.log(err));
      }, [iDetalles]);

   
      if(loading) {
          return (<Row className="pt-2 mb-4 header-background">
                      <Col >
                          <h2 className='font-link  text-white'>Cargando página...  
                          <Spinner animation="border" variant="light" />
                          
                          </h2>
                      </Col>
                  </Row>
              );
      }else{
        return (
          <>
            {product.category ? 
            <ItemDetail product={product} />
            : <PageNotFound/>
            }
          </>
        )
      }



    };
