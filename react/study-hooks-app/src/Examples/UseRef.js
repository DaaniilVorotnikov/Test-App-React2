import './App.css';
import React, {useState, useEffect, useRef} from 'react';



function UseRef() {
  const [value, setValue] = useState();
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const focus = () => inputRef.current.focus();
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() =>{
    prevValue.current = value
  }, [value])

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}>Фокус</button>
    </div>
  );
}

export default UseRef;