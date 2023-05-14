import React from 'react'
import "./App.css"
import ToDo from './components/ToDo';
import { useState } from 'react'
export default function App() {
  const[input,setinput]=useState("");
  const[items,setitems]=useState([]);
  const item=(event) =>{
    setinput(event.target.value);
  };
  const deleteitems=(id)=>{
        setitems((olditems)=>{
          return olditems.filter((ele,index)=>{
            return index!=id;
          })
        });
        
  }
  const listofitem=()=>{
    setitems((olditems)=>{
      return [...olditems,input];
    });
    setinput("");
  };
  return (
    <>
      <div className='main'>
        <div className='centre'>
          <br></br>
          <h1>ToDo List </h1>
          <br></br>
          <input type='text' placeholder='Add a Item' value={input} onChange={item} ></input>
          <button onClick={listofitem}> + </button>

          <ol>
            {items.map( (itemval,index)=>{
              return <ToDo 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteitems}></ToDo>
            })
          }
          </ol>
        </div>
      </div>
    </>
  )
}
