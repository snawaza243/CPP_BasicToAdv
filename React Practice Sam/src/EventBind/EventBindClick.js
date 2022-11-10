import React, { Component } from 'react'

// event bind with class-ful component
export class EventBindClick extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: true
    }
    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle () {
    this.setState(prevState => ({
      message: !prevState.message
    }))
  }
  render () {
    return (
      <>
        <center>
          <div>EventBindClick</div>
          <h3>Status: {this.state.message ? 'Online' : 'Offline'}</h3>
          <button onClick={this.clickHandle}>Click Me!</button>
        </center>
      </>
    )
  }
}

export default EventBindClick
