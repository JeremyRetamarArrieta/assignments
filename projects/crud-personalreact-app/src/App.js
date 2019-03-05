import React, { Component } from 'react';
import './Styles.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
        dadjokes: {}
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
            <Route exact path="/about" component={About}/>
            <Route exact path="/jokes" component={Jokes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
