import React from 'react'
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            counter: 0
        }
    }

    handleIncrement = () => {
        this.setState(prevState =>{
            return{
                counter: prevState.counter + 1
            }
        })
    }

    handleDecrement = () => {
        this.setState(prevState => {
            return{
                counter: prevState.counter -1
            }
        })
    }

    handleDivideByTwo = () => {
        this.setState(prevState => {
            return{
                counter: prevState.counter /2
            }
        })
    }

    render(){
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                handleDivideByTwo={this.handleDivideByTwo}/>
            </div>
        )
    }
}

export default App