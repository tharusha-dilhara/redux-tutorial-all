import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { numberdecrement, numberincrement } from './reducers/Number';

function App() {
  const number=useSelector((store)=>store.number);
  const dispach=useDispatch()
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> dispach(numberincrement(10))}>increment</button>
      <button onClick={()=>{dispach(numberdecrement())}}>decrement</button>
    </div>
  )
}

export default App