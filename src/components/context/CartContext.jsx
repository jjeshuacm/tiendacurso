import { createContext, useState, useContext } from "react";

// crear el contexto 
const cartContext = createContext([])


// exportar funcion que retorna cartContext usado
//useContext Para usar el contexto y se exporta
export function useCartContext() { return useContext(cartContext)} 

const CartContextProvider = ({children}) => {

    //Crear estado global para productos
    const [cartList, setCartList] = useState([]);
console.log("antes",cartList);

//setear car list, item pasado por parametros
    const addItem = (item) => {

        // console.log(item);
        // console.log(prodList);
        // const total = [ ...prodList, item ];
        // console.log(total);
       
        // setCartList([...cartList, item]);
     
        // console.log(prodList);

        //no repetir prod y sumar 
        const index = cartList.findIndex(elPro => elPro.item.id === item.item.id);

        
        //-1 no existe en el car list , 0 en adelante si
        if (index !== -1) { 
            //no existe  sumar cantidad
            cartList[index].quantity = item.quantity + cartList[index].quantity;
            //apuntaban al mismo espacio de memoria , se debe crear un nuevo array
            const newCartList = [...cartList]
            setCartList(newCartList);
         } else {
             //si existe
            setCartList( [ ...cartList, item ]);
         }       

   
    }
  //acumulador inicia en 0 //suma total de precios
        //aplicar acu a cada elmento del array
        //TOTAL GENERAL
    const sumTotal = () => {
    
        return cartList.reduce((acum,prod)=> acum= acum +( prod.item.price * prod.quantity) ,0)

    }

    //total cantidad de productos en el carrito
    const cantidad = () => {
        return cartList.reduce((acum,prod)=> acum+=  prod.quantity ,0)
    }

    const removeItem = (id) => { setCartList(cartList.filter( el => el.item.id !== id))  }

    const clear = () => { setCartList([]) }

    return (

    //   provider metodo mi proveedor : estados y funciones globales a todos los componentes children 
    //value donde se añadiran los estados y funciones globales, como son muchos se guarda en un objeto {{}}
    //el nombre es === al nombre de la creacion del contexto
        <cartContext.Provider 
            value={{
                cartList, 
                addItem,
                removeItem,
                clear,
                sumTotal,
                cantidad
               }}>
               {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;