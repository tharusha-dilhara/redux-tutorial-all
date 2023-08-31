import React, {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addLaptop } from "./reducers/LaptopSlice2";
import { nanoid } from "@reduxjs/toolkit";
import  {laptopSliceSelector2Reduser}  from "./reducers/LaptopSlice2";

function App() {

  const dispatch=useDispatch();
  const laptop = useSelector(laptopSliceSelector2Reduser);
  
  console.log();

  const price=useRef();
  const cpu=useRef();
  const gen=useRef();
  const ram=useRef();
  const hdd=useRef();

  const addlaptophandle = ()=>{
    dispatch(addLaptop(price.current.value,cpu.current.value,gen.current.value,ram.current.value,hdd.current.value))
  }

  return (
    <div style={{ width: "90vw" }}>
      <div className="addform">
        <h1>add item form</h1>
        <input ref={price} type="text" placeholder="price" />
        <input ref={cpu} type="text" placeholder="cpu" />
        <input ref={gen} type="text" placeholder="gen" />
        <input ref={ram} type="text" placeholder="ram" />
        <input ref={hdd} type="text" placeholder="hdd" />
        <input type="button" value="add item" onClick={addlaptophandle} />
      </div>
      <br/>
      {laptop.map((item) => (
        <div className="cart" key={item.id}>
          <div> id:{item.id}</div>
          <div>price:{item.price}</div>
          <div>cpu:{item.spec.cpu}</div>
          <div>ram:{item.spec.ram}</div>
          <div>hdd:{item.spec.hdd}</div>
        </div>
      ))}

    </div>
  );
}

export default App;
