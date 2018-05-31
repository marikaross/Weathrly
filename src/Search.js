import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Example search" 
          value={this.state.userInput}
          onChange={(event) => {
          return this.setState({
          userInput: event.target.value
        })
        }} />
        <button onClick={(event) => {
          event.preventDefault()
          this.props.fetchWeather(this.state.userInput)
        }}

        >Submit</button> 
      </div>
      )
  }
}


