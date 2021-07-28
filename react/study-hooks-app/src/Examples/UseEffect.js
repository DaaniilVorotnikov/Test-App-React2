import './App.css';
import React, {useState, useEffect} from 'react';



function UseEffect() {
  
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  const moseMoveHandler = event =>{
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() =>{

fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))

  }, [type]);

  useEffect(() => {

    window.addEventListener('mousemove', moseMoveHandler)

    return () =>{
    window.removeEventListener('mousemove', moseMoveHandler)  
    }
   }, [])

  return (
    <div>

    <h1>Ресурс: {type}</h1>

    <button onClick={() => setType('users')}>Пользователи</button>
    <button onClick={() => setType('todos')}>Todo</button>
    <button onClick={() => setType('posts')}>Посты</button>

    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

    <pre>{JSON.stringify(pos, null, 2)}</pre>

    </div>
  );
}

export default UseEffect;