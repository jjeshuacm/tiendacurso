import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Button, Card, ListGroup , Row, Col} from 'react-bootstrap';

export const Cart = () => {

  const { cartList, removeItem, clear } = useCartContext();



// console.log(prodList);
  return (<> 


    <Row className="mt-4" >
      <Col >
            <Card style={{ width: '48rem' }}>
                    <ListGroup variant="flush">

                        {cartList.map((ele,i) => (

                            <ListGroup.Item key={i} id={ele.item.id}>
                            
                                Nombre:  {ele.item.name} /
                                Precio: $ {ele.item.price} / Cantidad: {ele.quantity}
                                <Button  className='mr-2 ml-3'  onClick={() => removeItem(ele.item.id)}>Eliminar Item</Button>
                            </ListGroup.Item>
                          )
                      )}

                  </ListGroup>
            </Card>
        </Col>
    </Row>
      <Row className="mt-4" >
        <Col >
              <Button className='mr-2'  onClick={clear}>Vaciar Carrito </Button>
              <Link to='/'>
                  <Button className="seguircomprando ml-2">Seguir Comprando</Button>
              </Link>

      
        </Col>
     </Row>

  </>);
};
