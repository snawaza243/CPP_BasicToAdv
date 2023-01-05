import { render } from '@testing-library/react'
import React from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log('Inside A componentDidMount')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Inside A static getDerivedStateFromProps')
  }
  componentDidMount () {
    render()
    {
      return (
        <>
          <h1>
            <LifeCycleB />
            Hello React LifeCycle of A
          </h1>
        </>
      )
    }
  }
}

export default LifeCycleA
