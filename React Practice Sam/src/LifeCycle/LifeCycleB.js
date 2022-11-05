import { render } from '@testing-library/react'
import React from 'react'

class LifeCycleB extends React.Component {
  constructor (props) {
    super()
  }
  componentDidMount () {
    console.log('Inside B componentDidMount')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Inside B static getDerivedStateFromProps')
  }
  componentDidMount(){
    render(); {
        return(
            <>
            <h1>
                
            Hello React LifeCycle of B 
            </h1>
            </>
        )
    }
  }
}

export default LifeCycleB;

