import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [count, setCount] = useState(1);

  const handleCounter = (par) => {
    switch (par) {
      case 'add':
        setCount(count + 1);
        break;
      case 'dim':
        setCount(count - 1);
        break;
      case 'reset':
      default:
        setCount(1);
        break;
    }
  }
 
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
      <div>
        conto: {count}     
      </div>
      <div>
        <button onClick={() => {handleCounter('add')}}>aumenta di 1</button>
        <button onClick={() => {handleCounter('dim')}}>diminuisci di 1</button>
        <button onClick={() => {handleCounter('reset')}}>resetta</button>
      </div>
    </div>
  );
}

export default App;
