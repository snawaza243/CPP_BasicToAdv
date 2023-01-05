import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './Blog/App'
import { BrowserRouter } from 'react-router-dom'
import OnClick from './OnBlurOnClick/OnClick'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    //{' '}
    <BrowserRouter>
      // <App />
      //{' '}
    </BrowserRouter>
    <OnClick />
  </>
)
