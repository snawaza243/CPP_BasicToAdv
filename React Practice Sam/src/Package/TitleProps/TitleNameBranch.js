import React from 'react'
function NameBranch (props) {
  return (
    <h1>
      Hello {props.fullName} <br></br>
      Branch {props.branch}
    </h1>
  )
}
export default NameBranch;


// indexe.js
// import ReactDOM from 'react-dom/client'
// import NameBranch from './title/TitleNameBranch'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//   <NameBranch fullName='Sam' branch='CSE' />
//   </>
// )