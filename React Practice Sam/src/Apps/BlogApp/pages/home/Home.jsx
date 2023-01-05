import React from 'react'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/header/Header'

import './home.css'
import TopBar from '../../components/topbar/TopBar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home