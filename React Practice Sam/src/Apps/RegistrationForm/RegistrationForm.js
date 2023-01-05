import React from 'react'
import './RegistrationForm.css'
function RegistrationForm () {
  return (
    <>
      <div id='container'>
        <div id='container-box'>
          <>
            <div className='body-container'>
              <form>
                <label>
                  Name <br></br>
                  <input type={'text'}></input>
                  <br></br>
                </label>
                <label>
                  username <br></br>
                  <input type={'char'}></input>
                  <br></br>
                </label>
                <label>
                  Email <br></br>
                  <input type={'email'}></input>
                  <br></br>
                </label>
                <label>
                  Phone Number <br></br>
                  <input type={'phone'}></input>
                  <br></br>
                </label>
                <label>
                  Password <br></br>
                  <input type={'password'}></input>
                  <br></br>
                </label>
                <label>
                  Confirm Password <br></br>
                  <input type={'password'}></input>
                  <br></br>
                </label>
                <label>
                  <br></br>
                </label>
                <button type={'submit'}>Submit</button>
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default RegistrationForm
