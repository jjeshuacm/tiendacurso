import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Button, Card, ListGroup , Row, Col} from 'react-bootstrap';
import {getFirestore, collection,getDocs, addDoc,doc, updateDoc, where, documentId, query, writeBatch} from 'firebase/firestore';

export const Cart = () => {

  const { cartList, removeItem, clear, sumTotal } = useCartContext();

    const realizarCompra = async (e) => {
      e.preventDefault();
      //nuevo objeto orden
      let orden = {}
      //orden.date = Timestamp.fromDate(new Date());

      orden.buyer = {name: 'Jhon', email: 'jhonfer@gmail.com', phone: '12323232'}
      //OBTENER TOTAL
      orden.total = sumTotal();

      console.log(cartList);

      //ARMAR OBJETO  NUEVO CON MAP
      orden.items = cartList.map(cartItem =>{
        const id = cartItem.item.id;
        const nombre = cartItem.item.name;
        const precio = Number(cartItem.item.price) * Number(cartItem.quantity);
            return {
              id,
              nombre,
              precio,
              // cantidad
            } 
      })



      //CREAR
      const db = getFirestore();
      const ordersCollection = collection (db, 'orders');
      await addDoc(ordersCollection, orden)
      .then(resp => console.log(resp));
      //   console.log(orden);



        //ACTUALIZAR DOCUMENTOS UNO SOLO 
        // const queryDoc = doc(db,'items','9CnU4eq9NkWBKVCZ2fTe')
        // updateDoc(queryDoc,{
        //   stock:94
        // }).then(resp => console.log(resp));




        //ACTUALIZAR STOCK
       const queryCollection = collection (db, 'items');
       const queryActualizarStock = query(
         queryCollection, 
         where(documentId(),'in',cartList.map(it =>it.item.id))
       )

       const batch = writeBatch(db);
       await getDocs(queryActualizarStock)
       .then(resp => resp.docs.forEach(
            res => batch.update(
              res.ref,{
              stock: res.data().stock - Number(cartList.find(item => item.item.id === res.id).quantity)
            })
        ))
        .catch((err) => console.log(err))
        .finally(()=>console.log('Stoc actualizando'));

        batch.commit();

    }

    console.log(cartList);


// console.log(prodList);
  return (<> 


    <Row className="mt-4" >
      <Col >
            <Card style={{ width: '48rem' }}>
                    <ListGroup variant="flush">

                      {cartList.length !== 0 ?  

                      
                          <>
                              {
                                cartList.map((ele,i) => (
                                    <ListGroup.Item key={i} id={ele.item.id}>
                                        Nombre:  {ele.item.name} /
                                        Precio: $ {ele.item.price} / Cantidad: {ele.quantity} /
                                        <Button  className='mr-2 ml-3'  onClick={() => removeItem(ele.item.id)}>Eliminar Item</Button>
                                    </ListGroup.Item>
                                  ))
                                }
                                <div>{`El total es $ ${sumTotal()}`}</div>
                          </>

                          : <div>No hay productos agregados</div>
                      
                      }


                  </ListGroup>
                  
            </Card>
        </Col>
    </Row>
      <Row className="mt-4" >
        <Col >
              <Button className='mr-2'  onClick={clear}>Vaciar Carrito </Button>
              <Link to='/'>
                  <Button className="seguircomprando ml-2  mr-2">Seguir Comprando</Button>
              </Link>
              <Button className='mr-2 ml-2 '  onClick={realizarCompra}>Crear Orden </Button>
      
        </Col>
     </Row>

  </>);
};
