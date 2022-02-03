import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import logo from './pintar.png';
import './App.css';


function App() {
  return (
    <div className="App">
 
        <NavBar/>
        <div className='border'>
            <h1>Item List</h1>
            <ItemListContainer greetings="soy una props" />
        </div>
        <br/>
        <div className='border'>
            <h1>Item Detail</h1>
            <ItemDetailContainer />
        </div>
       
      
    </div>
  );
}

export default App;
