import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import logo from './pintar.png';
import './App.css';

function App() {
  return (
    <div className="App">
 
        <NavBar/>
        <ItemListContainer greetings="soy una props" />
       
       
      
    </div>
  );
}

export default App;
