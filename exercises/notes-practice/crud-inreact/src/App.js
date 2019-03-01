import React, { Component } from 'react'
import './App.css'
import ToDoList from './ToDoList.js'

class App extends Component {
  constructor() {
    super()
    this.state= {
      todos: []
    }
  }

  componentDidMount(){
    axios.get("https:api.vschool.io/natej/todo").then(response => {
      //resolve
      this.setState({
          todos: response.data
      })
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div >
        <ToDoList todos={this.state.todos/>
      </div>
    );
  }
}

export default App
