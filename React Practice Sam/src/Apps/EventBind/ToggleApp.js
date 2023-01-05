import React from 'react'


export class ToggleApp extends React {
  constructor (props) {
    super(props)
    this.state = { message: true }
    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton () {
    this.setState(prevState => ({ message: !prevState.message }))
  }

  render () {
    return (
      <>
        <center>
          <div>Toggle Button : ON/OFF</div>
          <h3>Status: {this.state.message ? 'OF' : 'OFF'} </h3>
          <button onClick={this.toggleButton}>Click here</button>
        </center>
      </>
    )
  }
}

export default ToggleApp;