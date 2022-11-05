import { unmountComponentAtNode } from 'react-dom'
import './GreetingUser.css'
function GreetingUser (props) {
  return (
    <>
      <center>
        <div id='container'>
          <div className='hero'>
            <h1>
              <span id='head-greed'>Hello {props.userName}</span>
            </h1>

            <hr></hr>

            <p>
              Welcome to Your Main Page .<br></br>
              <br></br>
              We are happy to see you.
              <br></br>
            </p>
            <div id='log-sign'>
              <button onClick={closelog}>Logout</button>
              <small>
                <a href='#reset'>Forgot ID</a>
              </small>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

function closelog(){
  unmountComponentAtNode(GreetingUser)
}
export default GreetingUser
