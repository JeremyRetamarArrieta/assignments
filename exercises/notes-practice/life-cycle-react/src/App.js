import React, { Component } from 'react'

// 1. Create a class Component 
// 2. use componentDidMount and componentWillUnmount to add a window keydown event listener
// 3. Use styling changes on key events by setting state depending on the key pressed  
        // hint: use the 'event.which' number

class App extends Component {
    constructor(){
        super()
        this.state = {
            bgColor: "blue",
            fontSize: 20
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.which === 71){
                this.setState({
                    bgColor: "green",
                    fontSize: 50
                })
            }
            // switch(e.which){
            //     case 71:
            //         this.setState({
            //             bgColor: "green",
            //             fontSize: 50
            //         })
            //         break;
            // }
        })
    }

    componentWillUnmount(){
        window.removeEventListener("keydown")
    }


    render(){
        return (
            <div style={{ backgroundColor: this.state.bgColor, fontSize: this.state.fontSize }}>
                <h1> Hello { this.state.username }</h1>
            </div>
        )
    }
}

export default App