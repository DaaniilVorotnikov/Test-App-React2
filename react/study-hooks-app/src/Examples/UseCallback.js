import './App.css';
import React, {useState, useCallback, useEffect, useRef, useMemo} from 'react';
import ItemList from './ItemList';

function UseCallback() {

  const [counter, setCounter] = useState(0);

  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'gold' : 'black'
  }

  const genItemsFromAPI = useCallback(() =>{
    return new Array(counter).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [counter])

  return (
    <>

      <h1 style={styles}>Счетчик: {counter}</h1>
      <button onClick={()=> setCounter(prevCounter => prevCounter + 1)} className="btn btn-success">Добавить</button>
      <button onClick={()=> setCounter(prevCounter => prevCounter - 1)} className="btn btn-danger">Убрать</button>
      <button onClick={()=> setColored(prevCounter => !prevCounter)} className="btn btn-danger">Позолотить счетчик</button>

      <ItemList getItems={genItemsFromAPI}/>

    </>
  );
}

export default UseCallback;