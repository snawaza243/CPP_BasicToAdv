import React from 'react'

// implementing using create class 
export const Ltt1 = React.createElement('h1',null,'Ingredient list 1 : createElement')
export const ListTree1Create = React.createElement('ul',{className:'ingredientsList'},
React.createElement('li',{}, '1 lb Salmon'),
React.createElement('li',{}, '1 Cup Pine Nut '),
React.createElement('li',{}, '2 Cup Butter Lettuce '),
React.createElement('li',{}, '1 Yellow Squash'),
React.createElement('li',{}, '1/2 Cup Olive Oil'),
React.createElement('li',{}, '3 Cloves of Garlic')
)




// // index.js
// import ReactDOM from 'react-dom/client'
// import React from 'react'
// // import { Ltt1, ListTree1Create } from './ListThree/ListTreePure'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     {Ltt1}
//     {ListTree1Create}
//   </>
// )
