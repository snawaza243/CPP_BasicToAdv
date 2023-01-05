import './GreetingUser.css'
function GreetingGuest (props) {
  return (
    <>
      <center>
        <div id='container'>
          <div className='hero'>
            <h1>
              <span id='head-greed'>Hello Guest</span>
            </h1>

            <hr></hr>

            <p>
              Welcome to the Guest Greeting page.
              <br></br>
              Dear Guest your are not registered <br></br>
              <br></br>
            </p>
            <div id='log-sign'>
              <button >Login

              </button>
              <button>Signup</button>
              <small ><a href='#reset'>
              Forgot ID</a></small>
            </div>

          </div>
        </div>
      </center>
    </>
  )
}
export default GreetingGuest
