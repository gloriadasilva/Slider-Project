import { useState } from 'react'
import React, {useRef, useEffect} from 'react'
import './App.css'

function App() {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  // console.log(refContainer);
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(refContainer.current.value);
    // return <div>{divContainer.current.innerHtml = "New value"}</div>
  }
  useEffect(()=>{
    console.log(refContainer.current);
  })
  return (
    <>
      <h1>Useref</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>
        <input type="text"
          ref={refContainer}
        />
        <button>Submit</button>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  )
}

export default App
