import React from 'react'
import './MyCounter.css'

var title = document.title='CounterApp | Stateful'

class MyCounter extends React.Component {
  constructor () {
    super()
    this.state = { count: 0}
  }
  render () {
    return (
      <>
        <div id='container'>
          <div id='container-box'>
            <div id='app-title'>
            <h1>{title}</h1>
              <div id='result'>
                <h1>You clicked {this.state.count} time (s)</h1>
              </div>
              <div id='bottom'></div>
              <button
                onClick={event => {
                  const countUpdate = this.state.count + 1
                  this.setState({ count: countUpdate })
                }}
              >
                Increment
              </button>
              <button
                onClick={event => {
                  const countUpdate = this.state.count - 1
                  this.setState({ count: countUpdate })
                }}
              >
                Decrement
              </button>
              <br></br>
              <div />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MyCounter;

// index.js
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import MyCounter from './counter/MyCounter'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//        <MyCounter title='My Counter 3 | ClassFull 2' />
//   </>
// )
