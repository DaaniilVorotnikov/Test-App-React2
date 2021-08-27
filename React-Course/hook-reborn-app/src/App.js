import React, {useState, useEffect} from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([{name: 'ivan', gender:'male'}]);

  useEffect(() => {
    updateChar();
    let timerId = setInterval(updateChar, 1500)
    return() => {
      clearInterval(timerId)
    }
  })
  
  return (
    <div>
      <p>Вы кликнули {count}</p>
      <button onClick={() => setCount(count + 1)}> ;-D </button>
      {data.map(item =>{
        return(
          <div>Name: {item.name}, gender: {item.gender}</div>
        );
      })}
      <button onClick={() => setData(data => ([...data,{name: 'Alex', gender: 'female'}]))}> Add data </button>
    </div>
    
  );
}

export default App;
