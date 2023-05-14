import React from 'react'
import "./ToDo.css"

export default function ToDo( props) {
    
  return (
    <>
    <div className='todo'>
    <i className="fa-sharp fa-solid fa-items fa-circle-xmark fa-beat"
      onClick={()=>{
        props.onSelect(props.id)
       }}
       ></i>
      <li>{props.text}</li>
    </div>
    </>
  )
}
