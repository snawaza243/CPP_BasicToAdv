import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
const App = () => {
  const App = () => {
    return <h1> Hello App</h1>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={Error} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello App</h1>
      <About />
      <Contact />
      <Error /> */}
    </>
  )
}

export default App
