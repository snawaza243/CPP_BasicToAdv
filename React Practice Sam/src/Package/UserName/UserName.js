
import ReactDOM from 'react-dom/client'
import React from 'react'

function UserName () {
  var user = {
    fname: 'sam',
    lname: 'sid',
    fn: function () {
      return `User name is ${this.fname} ${this.lname}`
    }
  }
  return (
    <>
      <h1> Display user name</h1>
      <p>
        User name is {user.fname} {user.lname}{' '}
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserName/>
  </>
)
