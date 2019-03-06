import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Jokes from './components/Jokes.js'
import {withJokes} from './context/JokesProvider.js'
import Contact from './components/Contact.js'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import './Styles.css'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
        dadjokes: []
    }
  }

  // do i need this section if I am getting it in the provider?
  // componentDidMount(){
  //   axios.get('https://icanhazdadjoke.com/').then(res => this.setState({ dadjokes: res.data}))
  //   .catch(err => console.log(err))
  // }

  render() {
    return (
      <div >
        <Nav />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/contact"  component={Contact}/>
            <Route  path="/about" component={About}/>
            <Route  path="/jokes" component={Jokes}/>
        </Switch>
      </div>
    );
  }
}

export default withJokes(App);
