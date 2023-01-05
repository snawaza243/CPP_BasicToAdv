// date: 07-10-2022
import './MyCounter.css'
// stateless
import React, { useState } from 'react'
import { useEffect } from 'react'

const MyCounterEffect = () => {
  const initialValue =0
  const [counter, setCounter] = useState(initialValue)
  
  const countPlus = () => {
    setCounter(counter + 1)
  }

  const countMinus = () => {
    // setCounter(counter - 1)
    counter > 0 ? setCounter(counter - 1) : setCounter(0)
  }

  useEffect(()=>{
    document.title = `Counts(${counter})`
  })
  return (
    <>
      <div id='container'>
        <div id='container-box'>
          <div id='app-title'>
          <h1>Counter App</h1>
            <h3>Stateless : Hooks-useEffect</h3>
          </div>
          <div id='result'>
            <h1>Lest's Counting: {counter}</h1>
          </div>
          <div id='bottom'>
            <button onClick={countPlus}>Increase</button>
            <button onClick={countMinus}>Decrease</button><br></br>
            <button onClick={()=>{setCounter(0)}}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCounterEffect;