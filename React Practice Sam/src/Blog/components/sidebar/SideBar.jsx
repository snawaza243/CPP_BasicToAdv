import React from 'react'
import './sidebar.css'
function SideBar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">
            ABOUT ME
          </span>
          <img className='sidebarTitleImg' src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, accusamus. Harum, ullam dolorum nam neque enim cum inventore dolores error itaque labore esse officia amet quis totam eius veniam molestias natus magni.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
            CATEGORIES
          </span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Life</li>

          </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">
            FOLLOW US
          </span>
          <div className="sidebarSocial">
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          </div>
        </div>
    </div>
    </>
  )
}

export default SideBar