import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';  
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {iDetalles} = useParams();
    // const iDetalles = 1;
  
 console.log(iDetalles);
  
    useEffect(() => {
        getProducts()
          .then((data) => {
             
            setProduct(data.find((item) => item.id === Number(iDetalles)));
          })
          .catch((err) => console.log(err));
      }, [iDetalles]);
    
      return (
        <>
        {/* {product.name} */}
        {/* {product.map((item,i) => (
              <div key={i}> 
               <div>{item.name}</div>
               <div>{item.price}</div>
              </div>
            ))} */}
          <ItemDetail product={product} />
        </>
      );
    };
// export default ItemDetailContainer;
