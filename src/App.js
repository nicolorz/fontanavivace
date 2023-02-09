import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

function App() {

  const [count, setCount] = useState(1);
  const [effect,setEffect] = useState('niente');
  const [prevCount,setPrev] = useState(0);

  useEffect(() => {
    setEffect('il conteggio precedente era ' + prevCount)
  }, [prevCount])

  const handleCounter = (val) => {
    setPrev(count)
    if ( val === 0 ) {
      setCount(1);
      return
    }
    setCount(count + val);
  }
 
  return (
    <div className="App">
      <Header />
      <div>{effect}</div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
      <div>
        conto: {count}     
      </div>
      <div>
        <button onClick={() => {handleCounter(1)}}>aumenta di 1</button>
        <button onClick={() => {handleCounter(-1)}}>diminuisci di 1</button>
        <button onClick={() => {handleCounter(0)}}>resetta</button>
      </div>
    </div>
  );
}

export default App;
