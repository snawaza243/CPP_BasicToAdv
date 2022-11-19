import React, { Component } from 'react'

export class ToggleApp extends Component {
  constructor (props) {
    super(props)
    this.state = [{ isToggledOn: true }, { isLoggedIn: true }]
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => [
      {
        isToggledOn: !prevState.isToggledOn
      },
      { isLoggedIn: !prevState.isLoggedIn }
    ])
  }
  static propTypes = {}

  render () {
    return (
      <center>
        <div>Toggle Button : ON/OFF</div>
        <h3>Status: {this.state.isToggledOn ? 'ON' : 'OFF'} </h3>
        <button onClick={this.toggleButton}>
          {this.state.isToggledOn ? 'Log Out' : 'Log In'}
        </button>
      </center>
    )
  }
}

export default ToggleApp
