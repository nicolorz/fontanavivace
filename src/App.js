import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [count, setCount] = useState(1);

  const counterUp = () => {
    setCount(count + 1);
  } 

  const counterDown = () => {
    setCount(count - 1);
  }

  const counterReset = () => {
    setCount(1);
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
        <button onClick={counterUp}>aumenta di 1</button>
        <button onClick={counterDown}>diminuisci di 1</button>
        <button onClick={counterReset}>resetta</button>
      </div>
    </div>
  );
}

export default App;
