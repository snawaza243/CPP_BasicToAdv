import React from 'react'
import useCustomHook from './useCustomHook'

function FirstComponent() {
    const clickedButton = useCustomHook(0,'First Component');
  return (
    <>
        <h1>First Component</h1>
        <button onClick={clickedButton}>
            Clicked me!
        </button>
    </>

    )
}

export default FirstComponent;