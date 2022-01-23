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
        <div > 
            <Button variant="outline-primary" onClick={handleIncrease}> + </Button>
            <Card  border="primary" className="m-3" style={{ width: '10rem',display:'inline-block' }}  body>
                {contador}
            </Card>
            <Button variant="outline-primary" onClick={handleDecrease}> - </Button><br/>
            <Button variant="outline-primary" onClick={add}>Agregar</Button>
        </div>
    )
}
