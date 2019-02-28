import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor (){
       super()
       this.state = {
        randomColor: ""
       }
    }
    
    componentDidMount(){
        axios.get("http://www.colr.org/json/color/random").then(response => {
          console.log(response.data.colors[0].hex)  
        this.setState({
                randomColor: response.data.results
            })
        }).catch(error => console.log(error))
    }
    
     render(){
         return(
             <div></div>
         )
    //     const mappedRandomColor
    }

}

export default App