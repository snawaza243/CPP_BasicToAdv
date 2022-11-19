import React from 'react'

function OnClick () {
  return (
    <>
      <div>
        <center>
          <h1>JS Practical onBlur() and OnClick</h1>
          <div className='box'>
            <form>
              <label>
                Enter number:
                <input  id='age' >

                {/* type={number} */}
                {/* onBlur={findAge} */}
                </input>
              </label>
              <textarea
                name='inputText'
                id='inputText'
                cols={30}
                rows={10}
                placeholder={'Enter your text'}
              ></textarea>
            </form>
          </div>
        </center>
      </div>
    </>
  )
}

export default OnClick
