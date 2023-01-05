import React from 'react'


function GreetingApp(props) {
  
  function UserGreet(props) {
    return <div> Welcome Back Sam ! </div>
  }

  function GuestGreet(props) {
    return <div> Dear guest please login  </div>
  }

  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreet />
  }
  return <GuestGreet />
}

export default GreetingApp
