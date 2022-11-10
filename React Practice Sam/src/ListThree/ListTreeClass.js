import React, { Component } from 'react'
const myList = [
  '1 lb Salmon',
  '1 Cup Pine Nut ',
  '2 Cup Butter Le',
  '1 Yellow Squash',
  '1/2 Cup Olive O',
  '3 Cloves of Ga'
]
export default class ListTreeClass extends Component {
  constructor (props) {
    super()
    
  }
  render () {
    return (
      <>
        {React.createElement(
          'ul',
          { className: 'ingredient' },
          myList.map((myList, i) => {
            React.createElement('li', { key: i }, myList)
          })
        )}
      </>
    )
  }
}
