import React, {Component} from 'react'
// import Name from './Name'

class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            ageInput: "",
            allName: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.allName]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState(prevState => {
            return {
                nameInput: "",
                ageInput: "",
                allName: [...prevState.names ,this.state.nameInput]
            }
        })
    }


    render(){

        const mappedNames = this.state.names.map((name, i)=> <h1>{name}</h1>)

        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <h1>{this.state.allName}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.nameInput} onChange = {this.handleChange} placeholder="Name"/>
                    <button>Submit</button>                
                </form>
                    <div>
                       {mappedNames} 
                    </div>
            </div>
        )
    }
}

export default App