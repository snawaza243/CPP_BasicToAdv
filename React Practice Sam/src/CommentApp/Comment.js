// Date: 11/10/22
import './Comment.css'
import React from 'react'
import Avatar from './Avatar'
import img from './user.png'

function Comment (props) {
  const event = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'

  }

  // var d1 = event.toLocaleDateString('en-EN', options)
  var d3 = event.toLocaleDateString(undefined, options)
  var d4 = event.toLocaleTimeString(undefined, { hour24: false })

  return (
    <>
      <div className='comment'>
        <div className='user-info'>
          <Avatar avatarURL={img} name='Avatar Image' />
          <div className='comment-text'>
            By :{props.text}
            <div className='comment-date'>
              <p>
                {d4} {d3}
              </p>
            </div>
            <div>
              <p>
                Says: <span className='commentText'>{props.comments}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Comment

// index.js
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import Comment from './Package/CommentApp/Comment'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     {/* <App /> */}
//     <Comment
//       author='Alam'
//       avatarURL='./squareLogo.png'
//       text=' Sam'
//       date={Date()}
//       comments = 'Is there any other options to complete the react coursefgsdfgsdf'
//     />
//   </>
// )
