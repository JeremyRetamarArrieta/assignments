import React, { Component } from 'react';
import Badge from './Badge.js'
import './styles.css';


class App extends Component {
  constructor(){
    super()
    this.state ={
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phoneNumber: "",
      favoriteFood: "",
      description: "",
      nameBadge: []
    }
  }

  handleChange = event => {
    const value = event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value
    this.setState({
      [event.target.name]: value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    // create obj with all the user input to add to the array in state
    const badgeObj = {
      firstName:    this.state.firstName,
      lastName:     this.state.lastName,
      email:        this.state.email,
      placeOfBirth: this.state.placeOfBirth,
      phoneNumber:  this.state.phoneNumber,
      favoriteFood: this.state.favoriteFood,
      description:  this.state.description,
    }

    this.setState(prevState =>{
      return{
        // Give us all objects from the previous state array, than added the new obj to the end
        nameBadge: [...prevState.nameBadge, badgeObj],
        // clear inputs
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favoriteFood: "",
        description: "",
      }
    })
  }


  render() {
    //map badges
    return (
      <div className="App">

        <form className="badge-form" onSubmit={this.handleSubmit}>
        <input className="inputs"
        type="text"
        name="firstName"
        value={this.state.firstName}
        onChange={this.handleChange}
        placeholder="First Name"
        />

        <input 
        className="inputs"
        type="text"
        name="lastName"
        value={this.state.lastName}
        onChange={this.handleChange}
        placeholder="Last Name"
        />

        <input
        className="inputs" 
        type="text"
        name="email"
        value={this.state.email}
        onChange={this.email}
        placeholder="Email"
        />

        <input
        className="inputs" 
        type="text"
        name="placeOfBirth"
        value={this.state.placeOfBirth}
        onChange={this.handleChange}
        placeholder="Place of Birth"
        />

        <input
        className="inputs" 
        type="text"
        name="phoneNumber"
        value={this.state.phoneNumber}
        onChange={this.handleChange}
        placeholder="Phone Number"
        />

        <input
        className="inputs" 
        type="text"
        name="favoriteFood"
        value={this.state.favoriteFood}
        onChange={this.handleChange}
        placeholder="Favorite Food"
        />

        <input
        className="inputs" 
        type="text"
        name="description"
        value={this.state.description}
        onChange={this.handleChange}
        placeholder="Tell me about yourself"
        />
        <button>Submit</button>
        
        </form>

        <div className="submittedInfo">
          
        </div>

      </div>
    );
  }
}

export default App;
