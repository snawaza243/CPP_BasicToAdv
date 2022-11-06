import ReactDOM from 'react-dom/client'
import React from 'react'
import A from './ToDoApp/ToDoApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <React.StrictMode>
      <A />
    </React.StrictMode>
  </>
)
