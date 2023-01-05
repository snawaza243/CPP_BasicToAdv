import React, { Component } from 'react'
import './Form.css'
export class Form2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }

  handleSubmit(e){
    if(this.state.value==''){
      alert('Dear write something what are you looking....')
    }
    else
    alert('An essay was submitted: '+ this.state.value);
    e.preventDefault();
  }
  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay title: 
            <br></br>
            
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          </label><br></br>
          <input type={'submit'} value={'Submit'} />
        </form>
      </>
    )
  }
}

export default Form2
