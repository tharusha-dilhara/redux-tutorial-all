import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const number=useSelector((store)=>store.number);
  const dispach=useDispatch()
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> dispach({
        type:'increment',
        payload :7
      })}>increment</button>



      <button onClick={()=>{
        dispach({
          type:'decrement',
          payload:3,
        })
      }}>decrement</button>
    </div>
  )
}

export default App
