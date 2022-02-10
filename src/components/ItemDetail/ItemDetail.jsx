import React from 'react';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';
import itemImg from '../../Item.jpg'; 
 const ItemDetail = (product) => {
     console.log(product);
    const { name, category, stock, price } = product.product;
    //  console.log(name);
  return (

       
    <Row >
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
               
                </Card.Body>
            </Card> 
          </Col>
    </Row>  
         
  
     );
    };


export default ItemDetail;