import React from 'react'
import ReactDOM from 'react-dom/client'
class LifeCycle extends React.Component {constructor (props) {
    super(props)
    this.state = { hello: 'World!' }
  }

  componentWillUnmount () {console.log('componentWillUnmount()')}
  componentWillMount () {console.log('componentWillMount()')}
  componentDidMount () {console.log('componentDidMount()')}

  changeState () {this.setState({ hello: 'Sam' })}
  render () {return (
      <>
        <h1>Hello {this.state.hello}</h1>
        <h2><button onClick={this.changeState.bind(this)}>Press Here!</button></h2>
      </>
    );
  }
  shouldComponentUpdate(nextProps,nextState){console.log("shouldComponentUpdate()"); return true;}
  componentWillMount(){console.log("componentWillMount()");}
  componentDidUpdate(){console.log("componentDidUpdate()");}
}
export default LifeCycle;
/* output
2    componentWillMount()
3    componentDidMount()
4    shouldComponentUpdate()
6    componentDidUpdate()
*/


/*
index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import LifeCycle from './LifeCycle/LifeCycle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LifeCycle />
)
*/