import React,{useEffect, useState} from 'react';

function useLgger(value){
  useEffect(()=>{
    console.log('Value change')
  }, [value])
}

function useInput(initialValue){
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }
  return{
    value, onChange
  }

}

function App() {

const input = useInput('')

useLgger(input.value)

  return (
    <div>
      <input type="text" {...input}/>
      <h1> {input.value} </h1>
    </div>
  );
}

export default App;
