import React from 'react'

function ListTreeFun () {
  const myList = [
    '1 lb Salmon',
    '1 Cup Pine Nut ',
    '2 Cup Butter Le',
    '1 Yellow Squash',
    '1/2 Cup Olive O',
    '3 Cloves of Ga'
  ]
  return (
    <>
      <div> <h1>Ingredient list 3:Fun+ES6 map()</h1>
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

export default ListTreeFun;

