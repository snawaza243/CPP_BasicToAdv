import React from 'react'
import './header.css'
function Header() {
  return (
    <>
 <div className="header">
    <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className="headerTitleLg">Blog</span>
    </div>
    <img className='headerImg' src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="hacker pic" />
 </div>
    </>
  )
}

export default Header