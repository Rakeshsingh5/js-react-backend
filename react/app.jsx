
import {useState } from 'react'
import './App.css'
import Chai from "./chai";

function App() {
  // let count = 5; 

  const [count , setCounter] = useState(10);

  const addvalue = () =>{
    if(count <20 )
    setCounter(count+1);
  }

  const remove= () =>{
    if(count >0)
    setCounter(count-1);
  }
 
  return (
    <>
      <h1>hello</h1>
      <h2>counter value:{count}</h2>
      <button onClick ={addvalue}> add value {count} </button>
      <br />
      <button onClick ={remove }>remove value {count}</button>
      <p> footer: {count}</p>


     

    </>
  );
}

export default App
