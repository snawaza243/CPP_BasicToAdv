import React from 'react'
import Home from './BlogApp/Home'
import Blog from './BlogApp/Blog'

import {Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Route path='/' component={Home}/>
    <Route path='/Blog/:id' component={Blog}/>

    </>
  )
}

export default App;