// // Example 1: Creating a friend list in Reactjs and input friend individual one-by-one




// import React from 'react'

// import './FriendList.css'
// export const title1 = React.createElement(
//   'h1',
//   {},
//   'Named Export & Friend List (one-by-one)'
// )
// export const friendList1 = React.createElement(
//   'div',
//   { id: 'friend-list1' },
//   React.createElement('h1', {}, 'Friend List 1'),
//   React.createElement(
//     'ul',
//     { className: 'friends' },
//     React.createElement('li', null, 'MyFriend 1.1'),
//     React.createElement('li', null, 'MyFriend 1.2'),
//     React.createElement('li', null, 'MyFriend 1.3')
//   )
// )


// // Example 2: Creating a friend list with map() and arrow function 

// export const title2 = React.createElement(
//   'h1',
//   {},
//   'Named Export & Friend List (with map)'
// )
// const friends = ['MyFriend 2.1', 'MyFriend 2.2', 'MyFriend 2.3']
// export const friendList2 = React.createElement(
//   'div',
//   { id: 'friend-list2' },
//   React.createElement('h1', {}, 'Friend List 2'),
//   React.createElement(
//     'ul',
//     { className: 'friends' },
//     friends.map((friends, i) => React.createElement('li', { key: i }, friends))
//   )
// )

// // index.js
// // import ReactDOM from 'react-dom/client'
// // import { title1 } from './FriendList/FriendList'
// // import { friendList1 } from './FriendList/FriendList'
// // import { title2 } from './FriendList/FriendList'
// // import { friendList2 } from './FriendList/FriendList'

// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(
// //   <>
// //     {title1}
// //     {friendList1}
// //     {title2}
// //     {friendList2}
// //   </>
// // )


import React from 'react'

import './FriendList.css'
export const title1 = React.createElement(
  'h1',
  {},
  'Named Export & Friend List (one-by-one)'
)