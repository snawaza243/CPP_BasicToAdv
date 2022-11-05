function Welcome (props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <h1>Your city {props.city}</h1>

    </>
  )
}

export default Welcome;


// index.js
// import ReactDOM from 'react-dom/client'
// import Welcome from './welcome/Welcome'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//   <Welcome name='Sam' city='ambala'/>
//   </>
// )
