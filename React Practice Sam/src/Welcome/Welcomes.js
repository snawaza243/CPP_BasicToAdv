import React from 'react'
class Welcomes extends React.Component {
  constructor (props) {
    super()
    this.state = { message: 'You are Welcome: ' }
  }
  render () {
    return (
      <>
        <>
          <h1>{this.state.message} {this.props.name}</h1>
          <h2>New Name: {this.props.newname}</h2>
          <h2>Your city is : {this.props.city}</h2>
        </>
      </>
    )
  }
}

export default Welcomes

// index.js
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Welcomes from './welcome/Welcomes'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
   
//     <Welcomes name='Shahnawaz' newname='SAM' city='Siwan' />
//   </>
// )
