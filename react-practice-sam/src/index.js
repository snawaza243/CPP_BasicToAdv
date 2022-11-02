import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Blogs from './Blogs'
import Contact from './Contact'
import NoPage from './NoPage'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom'
import Layout from './Layout'

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
    <Outlet/>
  </BrowserRouter>
)
