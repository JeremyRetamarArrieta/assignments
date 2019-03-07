import React, { Component } from 'react'
import axios from 'axios'

const JokesContext = React.createContext()

class JokesProvider extends Component {
    constructor (){
        super()
        this.state = {
            id: {},
            savedJokes: [],
            currentJoke: {}
        }
        this.url = "https://icanhazdadjoke.com/"
    }

    //save current/previous jokes

    saveJoke = () => {
        this.setState(prevState => ({
            savedJokes: [...prevState.savedJokes, this.state.currentJoke.joke]

        }))
    }


    
    getJokes = () => {
        axios.get(this.url, {headers: {Accept: 'application/json'}}).then(response => {
            
            this.setState({
                currentJoke: response.data
            })
        }).catch(error => console.log(error))
    }

    
    

    render(){
        return(
            <JokesContext.Provider
                value={{
                    id: this.state.id,
                    savedJokes: this.state.savedJokes,
                    currentJoke: this.state.currentJoke.joke,
                    getJokes: this.getJokes,
                    saveJoke: this.saveJoke
                }}>
                { this.props.children }
            </JokesContext.Provider>
        )
    }
}


export const withJokes = C => props => (
    <JokesContext.Consumer>
        { value => <C {...props} {...value}/> }
    </JokesContext.Consumer>
)

export default JokesProvider