import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
function TopBar() {
  return (
    <>
      <div className='top'>
        <div className='topLeft'>
          <h1 className='topLeftLogo' title='NewRest'>NewRest</h1>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>Home</li>
            <li className='topListItem'>Offers </li>
            <li className='topListItem'>Order </li>
            <li className='topListItem'>AboutUs </li>
            <li className='topListItem'>ContactUs </li>
            <li className='topListItem'>Profile </li>
          </ul>
        </div>
        <div className='topRight'>
          <i className='topSearchIcon fas fa-search'></i>
        </div>
      </div>
    </>
  )
}

export default TopBar


// for router 
/**
 *        <ul className='topList'>
            <li className='topListItem'><Link to="./" >Home</Link></li>
            <li className='topListItem'><Link to="./RestOffers" >Offers</Link> </li>
            <li className='topListItem'><Link to="./RestOrder" >Order</Link> </li>
            <li className='topListItem'><Link to="./RestAboutUs" >AboutUs</Link> </li>
            <li className='topListItem'><Link to="./RestContactUs" >ContactUs</Link> </li>
            <li className='topListItem'><Link to="./RestProfile" >Profile</Link> </li>
          </ul>
 */