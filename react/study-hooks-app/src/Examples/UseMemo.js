import './App.css';
import React, {useState, useEffect, useRef, useMemo} from 'react';

function complexCompute(cntr){
  let i = 0;

  while(i < 1000000000) i++

  return cntr + 1
}

function UseMemo() {

  const [counter, setCounter] = useState(0);

  const [colored, setColored] = useState(false);

  const styles ={
    color: colored ? 'gold' : 'black'
  }

  const computed = useMemo(() =>{
  return complexCompute(counter)
  }, [counter])
  
  return (
    <div>

      <h1 style={styles}>Счетчик: {computed}</h1>
      <button onClick={()=> setCounter(prevCounter => prevCounter + 1)} className="btn btn-success">Добавить</button>
      <button onClick={()=> setCounter(prevCounter => prevCounter - 1)} className="btn btn-danger">Убрать</button>
      <button onClick={()=> setColored(prevCounter => !prevCounter)} className="btn btn-danger">Позолотить счетчик</button>



    </div>
  );
}

export default UseMemo;