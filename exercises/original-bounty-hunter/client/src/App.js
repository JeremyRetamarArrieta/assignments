import React, {Component} from 'react'
import './App.css'
import {Router, Route, Switch} from 'react-router'
import Axios from 'axios';

class App extends Component {
  
  constructor{
    super()
    this.state = {
        bounites:[]
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
      {this.state.bounties.map(bounites => <h1>{bounites.firstName} {bounties.lastName}</h1>)}
      </div>
    )
  }
}

export default App
