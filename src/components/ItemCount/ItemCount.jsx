import  { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setcontador] = useState(initial);
   
    const handleIncrease = () => {
        if(contador < stock) setcontador(contador + 1);
        console.log("sumar");

    }
    const handleDecrease = () => {
        if(contador > initial) setcontador(contador - 1);
        console.log("restar");
    }
    const add = () => {
        onAdd(contador)
        console.log("agregar");
    }



    return (
        <> 
            <Button variant="outline-primary" className="pt-0 pb-0 " onClick={handleIncrease}> + </Button>
            <Card  border="primary" className="m-2 p-0 " style={{ width: '3rem',display:'inline-block' }}  >
                <Card.Body className=" p-0 ">
                {contador}
                </Card.Body>
                
            </Card>
            <Button variant="outline-primary" className="pt-0  pb-0" onClick={handleDecrease}> - </Button><br/>
            <Button variant="outline-primary" onClick={add}>Agregar</Button>
        </>
    )
}
