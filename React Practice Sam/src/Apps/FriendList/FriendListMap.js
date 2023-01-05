// Example 2: Creating a friend list with map() and arrow function
export const title2 = React.createElement(
  'h1',
  {},
  'Named Export & Friend List (with map)'
)
const friends = ['MyFriend 2.1', 'MyFriend 2.2', 'MyFriend 2.3']
export const friendList2 = React.createElement(
  'div',
  { id: 'friend-list2' },
  React.createElement('h1', {}, 'Friend List 2'),
  React.createElement(
    'ul',
    { className: 'friends' },
    friends.map((friends, i) => React.createElement('li', { key: i }, friends))
  )
)


//index.js

// import ReactDOM from 'react-dom/client'
// import React from 'react'
// import FriendListMapRender from './FriendList/FriendListMapRender'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <FriendListMapRender/>
//   </>
// )