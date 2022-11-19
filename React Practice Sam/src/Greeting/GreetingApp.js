import React from 'react'

function UserGreet (props) {
  return <div>Welcome back!</div>
}

function GuestGreet (props) {
  return <div>Please signup </div>
}

function GreetingApp (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreet />
  }
  return <GuestGreet />
}

export default GreetingApp
