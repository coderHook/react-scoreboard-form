import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddPlayer.css'

export class AddPlayer extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  }
  state = { name: '' }

  handleSubmit= (event) => {
    event.preventDefault()
    console.log(`Submitting form with name ${this.state.name}`);

    this.props.addPlayer(this.state.name);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" 
                   name="name" 
                   onChange = {this.handleChange}
                   value = {this.state.name}
                   />
          </label>
          <label>
            <input type="submit" value="Add" />
          </label>
        </form>
        
      </div>
    )
  }
}

export default AddPlayer
