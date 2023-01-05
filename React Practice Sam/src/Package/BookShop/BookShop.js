import SaNav from './SaNav'
import SaFooter from './SaFooter'
import SaSlideshow from './SaSlideshow'
import ShowBookAPI from './ShowBookAPI'
import './Sa.css'
function BookShop() {
  return (
    <>
      <SaNav />
      <SaSlideshow />
      <center>
        <ShowBookAPI />
      </center>
      <SaFooter />
    </>
  )
}

export default BookShop

// index.js
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import BookShop from './bookshop/component/BookShop';
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//   <BookShop />
//   </>
// )
