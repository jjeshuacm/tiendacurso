import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, ListGroup} from 'react-bootstrap';

const Item = ({id, name, stock, category, price, imagenUrl}) => {
    // console.log(name, stock, category, price, id);

    
  return (
      <div className="item mb-2" >
      <img className="card-img-top"  src={imagenUrl} alt={name}  title={name}/>
          <Card.Body className="cart-body-padding">
              <Card.Title className="font-link mt-2">{name}</Card.Title>
                  <ListGroup className="m-0" variant="flush">
                    <ListGroup.Item className="p-0">Category: {category}</ListGroup.Item>
                    <ListGroup.Item className="p-0">Stock: $ {stock}</ListGroup.Item>
                    <ListGroup.Item className="p-1">Price: {price}</ListGroup.Item>
                  </ListGroup>

                  <Link  to={`../../detalles/${id}`}>
                <Button className='btn-purple detalle '>Detalles</Button>
                </Link>
            </Card.Body>
      </div>
   
      // <Card style={{ width: '18rem' }}>
      //   <Card.Img variant="top" src={imagenUrl} />
      // </Card>  
 
            );
};

export default Item;
