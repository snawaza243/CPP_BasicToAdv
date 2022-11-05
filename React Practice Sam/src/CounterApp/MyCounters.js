import React from 'react'
import './MyCounter.css'
class MyCounter extends React.Component {
  constructor () {
    super()
    this.state = { count: 0, valueReset: 0}

  }
  
  render () {

    return (
      <>
        <div id='container'>
          <div id='container-box'>
            <div id='app-title'>
              <h1>ClassFull: Counter App{this.props.title}</h1>
              <div />
              <div id='result'>
                <h1>Let's Counting : {this.state.count}</h1>
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

              <button
                // onClick={this.state.num}
              >
                Reset
              </button>
              <div />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MyCounter

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
