import React, { Component } from 'react'

export class ReactLifeCycle extends Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello!' }
  }
  componentWillUnmount () {
    console.log('this.componentWillUnmount()')
  }
  componentDidMount () {
    console.log('this.componentDidMount()')
  }
  changeState () {
    this.setState({ message: 'Hii' })
  }

  render () {
    return (
      <>
        <h1>Dear... {this.state.message}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Click here!</button>
        </h2>
      </>
    )
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('this.shouldComponentUpdate()')
    return true
  }
  componentWillUpdate () {
    console.log('this.componentWillUnmount()')
  }
  componentDidUpdate(){
    console.log('this.componentDidUpdate()')
  }
}

export default ReactLifeCycle
