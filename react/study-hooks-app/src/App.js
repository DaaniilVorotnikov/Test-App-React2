import './App.css';
import React, {useState, useEffect, useRef, useMemo} from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  const [colored, setColored] = useState(false);

  const styles ={
    color: colored ? 'gold' : 'black'
  }

 

  return (
    <div>

      <h1 style={styles}>Счетчик: {counter}</h1>
      <button onClick={()=> setCounter(prevCounter => prevCounter + 1)} className="btn btn-success">Добавить</button>
      <button onClick={()=> setCounter(prevCounter => prevCounter - 1)} className="btn btn-danger">Убрать</button>
      <button onClick={()=> setColored(prevCounter => !prevCounter)} className="btn btn-danger">Позолотить счетчик</button>



    </div>
  );
}

export default App;
