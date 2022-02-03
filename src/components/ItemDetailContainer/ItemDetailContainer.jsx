import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';  
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const productId = 1;

 
  
    useEffect(() => {
        getProducts()
          .then((data) => {
            //   console.log(data);
            setProduct(data.find((item) => item.id === productId));
          })
          .catch((err) => console.log(err));
      }, []);
    
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
