// date: 07-10-2022
import './MyCounter.css'
// stateless
import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  if (action.type == 'plus') {
    state = state + 1
  }
  if (state > 0 && action.type == 'minus') {
    state = state - 1
  }
  if (action.type =='reset'){
    state = 0;
  }
  return state
}
const MyCounterReducer = () => {
  const initialValue = 0

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <>
      <div id='container'>
        <div id='container-box'>
          <div id='app-title'>
            <h1>Hooks (Reducer): Counter App</h1>
          </div>
          <div id='result'>
            <h1>Lest's Counting: {state}</h1>
          </div>
          <div id='bottom'>
            <button onClick={() => dispatch({ type: 'plus' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'minus' })}>
              Decrease
            </button>
            <br></br>
            <button
              onClick={()=> dispatch({type:'reset'})}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCounterReducer
