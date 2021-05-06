import React, { Component } from 'react'
//import { connect } from 'react-redux'

class BandInput extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

    handleChange = (event) => {
      this.setState({ 
        name: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addBand(this.state)
      this.setState({
        name: ''
      })

    }

    

    render() {
      return(
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" onChange={event => this.handleChange(event)}/>
            <input type="submit" />
          </form>
          {this.state.text}
        </div>
      )
    }
  }

export default BandInput
