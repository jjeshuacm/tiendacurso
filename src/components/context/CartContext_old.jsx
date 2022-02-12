import { createContext,useState, useContext } from 'react';



const CardContext = createContext();
//  const useCardContext = useContext(CardContext);

const CardContextProvider = ({children}) => {
    
    const [character,setCharacter] = useState([]);

        const agregar = (element) => {
            setCharacter([...character,element])
        }

        return(
            <CardContext.Provider value={{agregar, character}}>
                {children}
            </CardContext.Provider>
        )

}

export default CardContextProvider;