// index.js
import ReactDOM from 'react-dom/client'
import React from 'react'
import { Ltt1, ListTree1Create } from './ListThree/ListTreePure'
import { Ltt2, ListTree2Map } from './ListThree/ListTreeMap'
import ListTreeFun from './ListThree/ListTreeFun'

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
