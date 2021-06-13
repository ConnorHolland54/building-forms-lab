// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(){
    super();
    this.state = {
      name: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label><br />
          <input type="Text" onChange={this.handleOnChange}/><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
