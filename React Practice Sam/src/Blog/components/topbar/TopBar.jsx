import React from 'react'
import './topbar.css'
function TopBar () {
  return (
    <>
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fab fa-facebook-square'></i>
          <i className='topIcon fab fa-twitter-square'></i>
          <i className='topIcon fab fa-pinterest-square'></i>
          <i className='topIcon fab fa-instagram-square'></i>
        </div>
        <div className='toCenter'>
          <ul className='topList'>
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Content</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>Logout</li>
          </ul>
        </div>
        <div className='topRight'>
          {/* <i className='fa fa-user aria-hidden="true topImg"'></i> */}

          <img className='topImg' src='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg' alt='profile' />
          <i className='topSearchIcon fas fa-search'></i>
        </div>
      </div>
    </>
  )
}

export default TopBar
