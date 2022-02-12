import React, { useState } from 'react';
import { Card, ListGroup, Col, Row, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import itemImg from '../../Item.jpg'; 
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

 const ItemDetail = (product) => {

    const [contador, setContador] = useState(0);

    //usar el contexto y usar dos retornos
    const {cartList, addItem} = useCartContext();



     console.log("recibodetail",cartList);
    const { name, category, stock, price } = product.product;



    function onAdd(cant){
        // addItem({...product, cantidad: cant});
        addItem({item: product.product, quantity: cant}) ;
        
        // console.log(prodList);
        setContador(cant);
        // console.log(cant);
    }


 
  return (

       
    <Row className='mt-4' >
        <Col sm={12}>   
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <ListGroup className="m-0" variant="flush">
                        <ListGroup.Item className="p-0">Category: {category}</ListGroup.Item>
                        <ListGroup.Item className="p-0">Stock: $ {stock}</ListGroup.Item>
                        <ListGroup.Item className="p-1">Price: {price}</ListGroup.Item>
                    </ListGroup>
                    
                    {contador === 0 ?  
                    <ItemCount  initial={1} stock={5} onAdd={onAdd}/> : 
                            <>
                            <Link to="/cart">
                                <Button className='mr-2'>Terminar Compra</Button>
                            </Link>
                            <Link to="/">
                                <Button className='ml-2' >Seguir Comprando</Button>
                            </Link>
                            </>
                     }
                   


                </Card.Body>
            </Card> 
          </Col>
    </Row>  
         
  
     );
    };


export default ItemDetail;