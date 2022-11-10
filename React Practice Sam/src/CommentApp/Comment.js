// Date: 11/10/22
import './Comment.css'
import React from 'react'
import Avatar from './Avatar'

import img from './cmtimg.png'
function Comment (props) {
  return (
    <div className='comment'>
      <div className='user-info'>
        <center> Example of comment and Avatar</center>
        <Avatar avatarURL={img} name='mylogo' />
        <div className='comment-text'>Hello {props.text}</div>
        <div className='comment-date'>Current Date if (condition) {
          
        } else {
          
        } {props.date}</div>
      </div>
    </div>
  )
}
export default Comment


// index.js
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Comment from './CommentApp/Comment'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <Comment
//       author='Alam'
//       avatarURL='./squareLogo.png'
//       text='Sam'
//       date={Date()}
//     />
//   </>
// )
