// Example 3: A component of variable set created element assigned to a variable with render key

// Note: Bad method
import React from 'react'
import ReactDOM from 'react-dom/client'

import FriendListMapRender from './FriendListMapRender'
const myFriends = ['MyFriend 2.1','MyFriend 2.2','MyFriend 2.3'];
const friendList3 = React.createElement(
    'div',{id:'friend-list2'},
    React.createElement('h1',{},"Friend List 2"),
        React.createElement('ul',{className:'friends'},
        myFriends.map((myFriends,i)=>React.createElement('li',{key:i},myFriends))
        )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(friendList3);
export default FriendListMapRender;


// `index.js
// import ReactDOM from 'react-dom/client'
// import React from 'react'
// import FriendListMapRender from './friendlist/FriendListMapRender'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <FriendListMapRender/>
//   </>
// )`