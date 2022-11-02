import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Router/Home'
import Blogs from './Router/Blogs'
import Contact from './Router/Contact'
import NoPage from './Router/NoPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Home />
    <Blogs />
    <Contact />
    <NoPage /> 
  </>
)
