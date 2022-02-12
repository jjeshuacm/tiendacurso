import React, {createContext} from "react";
import { useState } from "react";

// crear el contexto 
 const ContextApp = createContext([]);



 
 export const CartContextProvider = ({ children }) => {

    //Crear estado global para productos
    const [prods, setProds]= useState();

  return (
    //   provider metodo mi proveedor : estados y funciones globales a todos los componentes children 
    //value donde se añadiran los estados y funciones globales, como son muchos se guarda en un objeto {{}}
    <CartContextProvider.Provider value={{prods}}>

    </CartContextProvider.Provider>
  )
}
