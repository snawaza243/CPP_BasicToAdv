// Example 1: Creating a friend list in Reactjs and input friend individual one-by-one
import React from 'react'
import './FriendList.css'
export const title1 = React.createElement(
  'h1',
  {},
  'Named Export & Friend List (one-by-one) Individual'
)
export const friendList1 = React.createElement(
  'div',
  { id: 'friend-list1' },
  React.createElement('h1', {}, 'Friend List 1'),
  React.createElement(
    'ul',
    { className: 'friends' },
    React.createElement('li', null, 'MyFriend 1.1'),
    React.createElement('li', null, 'MyFriend 1.2'),
    React.createElement('li', null, 'MyFriend 1.3')
  )
)