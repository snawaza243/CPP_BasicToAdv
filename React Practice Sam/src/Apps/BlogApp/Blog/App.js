import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../../About'
import Contact from './Contact'
import Error from './Error'
const App = () => {
  return (
    <>
      {/* <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Error} />
    </Switch> */}
      <h1>Hello App</h1>
      <About />
      <Contact />
      <Error />
    </>
  )
}

export default App
