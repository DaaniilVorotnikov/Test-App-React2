import './App.css';
import List from './List';
import React from 'react';
import Context from './ConText';
import AddMessage from './AddMessage';

function App() {
 const [does, setDoes] = React.useState([
  {id: 1, complited:false, title: "New message 1"},
  {id: 2, complited:false, title: "New message 2"},
  {id: 3, complited:false, title: "New message 3"}
])
 

  function betDo(id){
    setDoes(
      does.map(deep => {
      if(deep.id === id){
        deep.complited = !deep.complited
      }
      return deep
    })
    )
  }

  function RemoveDo(id){
    setDoes(does.filter(rmv => rmv.id !== id))
  }

  function addMessage(title){
    setDoes(does.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ RemoveDo }}>
    <div className='wrapper'>
      <h1>Tutorial </h1>
      <AddMessage onCreate={addMessage} />
      {does.length ? <List dos={does} onBet={betDo}/>: <p>No messages</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
