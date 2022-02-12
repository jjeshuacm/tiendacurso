import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, ListGroup, Col } from 'react-bootstrap';
import itemImg from '../../Item.jpg'; 
const Item = ({id, name, stock, category, price}) => {
    // console.log(name, stock, category, price, id);
  return (

    <Col className="mb-4"> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={itemImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
              <ListGroup className="m-0" variant="flush">
                <ListGroup.Item className="p-0">Category: {category}</ListGroup.Item>
                <ListGroup.Item className="p-0">Stock: $ {stock}</ListGroup.Item>
                <ListGroup.Item className="p-1">Price: {price}</ListGroup.Item>
              </ListGroup>

              <Link to={`detalles/${id}`}>
           <Button className='detalle'>Detalles</Button>
           </Link>


          {/* <Button variant="primary" href={`/detalles/`+id}>Detalles</Button> */}
        </Card.Body>
      </Card>  
    </Col> 
        
            );
};

export default Item;
