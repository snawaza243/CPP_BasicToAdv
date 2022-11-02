import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './ReactRouter/Home'
import Blogs from './ReactRouter/Blogs'
import Contact from './ReactRouter/Contact'
import NoPage from './ReactRouter/NoPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './ReactRouter/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
