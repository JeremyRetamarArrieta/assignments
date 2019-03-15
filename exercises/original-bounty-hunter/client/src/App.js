import React, {Component} from 'react'
import './App.css'
import {Router, Route, Switch} from 'react-router'
import Axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        living: false,

    }
  }

  componentDidMount(){
    Axios.get("/bounties").then(response => {
      this.setState({
        bounties: response.data
      })
    })
  }


  render() {
    return (
      <div className="App">

      </div>
    )
  }
}

export default App
