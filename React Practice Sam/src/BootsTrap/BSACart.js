import React from 'react'
import './BootstrapApp.css'

function BSACart (props) {
  return (
    <>
      <>
        <span class='card'>
          <img src={props.src} class='card-img-top' alt='CartImage'></img>
          <div class='card-body'>
            <center btn-box>
              <button class='card-b'>Buy</button>
              <button class='card-b'>Cart</button>
            </center>
            <div class='card-body'>
              <p class='card-text'>Tag: {props.CartDis}</p>
            </div>
          </div>
        </span>
      </>
    </>
  )
}

export default BSACart
