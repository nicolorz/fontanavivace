import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [count, setCount] = useState(1);

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
        <button onClick={() => {setCount(count + 1)}}>aumenta di 1</button>
        <button onClick={() => {setCount(count - 1)}}>diminuisci di 1</button>
        <button onClick={() => {setCount(1)}}>resetta</button>
      </div>
    </div>
  );
}

export default App;
