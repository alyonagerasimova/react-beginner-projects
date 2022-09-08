import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  function onClickPlus(){
    setCount(count+1);
  }

  function onClickMinus(){
    setCount(count-1);
  }
  
  return (
    <div className="App">
      <div>
        <h2>Счётчик</h2> 
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>-</button>
        <button className="plus" onClick={onClickPlus}>+</button>
      </div>
    </div>
  );
}

export default App;
