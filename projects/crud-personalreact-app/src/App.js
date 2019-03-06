import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { PageFade } from './transitions'
import JokesPage from './components/JokesPage.js'
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
          dadjokes: [],
          navToggle: false   
        }
      }

      toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle}))


  // do i need this section if I am getting it in the provider?
  // componentDidMount(){
  //   axios.get('https://icanhazdadjoke.com/').then(res => this.setState({ dadjokes: res.data}))
  //   .catch(err => console.log(err))
  // }

  render() {

    const { navToggle } = this.state
    const { location } = this.props

    return (
      <div className="app-container">
        <Nav navToggle={navToggle} toggler={this.toggler}/>
        <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
        <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler}>|||</button>

        <PageFade location={location}>
        <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route  path="/contact"  component={Contact}/>
            <Route  path="/about" component={About}/>
            <Route  path="/jokespages" component={JokesPage}/>
        </Switch>
        </PageFade>
      </div>
    );
  }
}

export default withRouter(withJokes(App));
