import React, { Component } from 'react'
import GreetingApp from './GreetingApp'

function LoginButton(props) {
  return <button onClick={props.onClick}>LogIn</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>LogOut</button>
}

export class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <>
        <div>
          <GreetingApp isLoggedIn={isLoggedIn} /> {button}
        </div>
      </>)
  }
}

export default LoginControl
