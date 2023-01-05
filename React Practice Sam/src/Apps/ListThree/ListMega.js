// index.js
import ReactDOM from 'react-dom/client'

import React from 'react'

const myList = [
  '1 lb Salmon',
  '1 Cup Pine Nut ',
  '2 Cup Butter Le',
  '1 Yellow Squash',
  '1/2 Cup Olive O',
  '3 Cloves of Ga'
]

export const Ltt1 = React.createElement('h1',null,'Ingredient list 1 : createElement')
export const ListTree1Create = React.createElement('ul',{className:'ingredients'},
React.createElement('li',{}, '1 lb Salmon'),
React.createElement('li',{}, '1 Cup Pine Nut '),
React.createElement('li',{}, '2 Cup Butter Lettuce '),
React.createElement('li',{}, '1 Yellow Squash'),
React.createElement('li',{}, '1/2 Cup Olive Oil'),
React.createElement('li',{}, '3 Cloves of Garlic')
)

const Ltt2 = React.createElement('h1', null, 'Ingredient list 2: ES6 map()')
const ListTree2Map = React.createElement(
  'ul',
  { className: 'ingredients' },
  myList.map((myList, i) => React.createElement('li', { key: i }, myList))
  //   React.createElement('li', null)
)

function ListTreeFun () {
  return (
    <>
      <div>
        {' '}
        <h1>Ingredient list 3:Fun+ES6 map()</h1>
        {React.createElement(
          'ul',
          { className: 'ingredients' },
          myList.map((myList, i) =>
            React.createElement('li', { key: i }, myList)
          )
        )}
      </div>
    </>
  )
}

export default ListTreeFun

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    {Ltt1}
    {ListTree1Create}
    {Ltt2}
    {ListTree2Map}
    <ListTreeFun />
  </>
)
