import React from 'react'


const myList = [
  '1 lb Salmon',
  '1 Cup Pine Nut ',
  '2 Cup Butter Le',
  '1 Yellow Squash',
  '1/2 Cup Olive O',
  '3 Cloves of Ga'
]

export const Ltt2 = React.createElement(
  'h1',
  null,
  'Ingredient list 2: ES6 map()'
)

export const ListTree2Map = React.createElement(
  'ul',
  { className: 'ingredients' },
  myList.map((myList, i) => React.createElement('li', { key: i }, myList))
  //   React.createElement('li', null)
)
