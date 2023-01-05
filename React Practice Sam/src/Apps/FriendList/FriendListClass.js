import React from 'react'
import ReactDOM from 'react-dom/client'
import FriendListClass from './FriendListClass'
//Pure React
class Counters extends React.Component {
  constructor (props) {
    super()
    this.state = { count: 0 }
  }
  render () {
    return(
      
    React.createElement(
      'div',
      { id: 'friend-list' },
      React.createElement('h1', {}, 'Friend List'),
      React.createElement(
        'ul',
        { className: 'friends' },
        React.createElement('li', null, 'friend 1'),
        React.createElement('li', null, 'friend 2'),
        React.createElement('li', null, 'friend 3')
      )
    ) 
    )
  }
}

export default FriendListClass;

// ReactDOM.render(list1, document.getElementById('root'))
