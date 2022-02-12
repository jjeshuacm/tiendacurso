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

        
        
        if (index !== -1) { 
            cartList[index].quantity = item.quantity + cartList[index].quantity;
            setCartList(cartList);
         } else {
            setCartList( [ ...cartList, item ]);
         }       

   
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
                clear 
               }}>
               {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;