import React, { Component } from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
        this.url = "https:api.vschool.io/jeremyretamararrieta/todo"
    }

    getTodos = () =>{
        axios.get(this.url).then(response => {
            //resolve
            this.setState({
                todos: response.data
            })
        })//reject?
        .catch(error => console.log(error))
    }

    addTodo = (inputs) => {
        const { title, description, price, imgUrl } = inputs
        // POST request 
        // create object
        const newTodo = { title, description, price, imgUrl }

        axios.post(this.url, newTodo).then(response => {
            this.setState(prevState =>{
                return {
                    todos: [response.data, ...prevState.todos]
                }
            })
            //todos: maintain old todos, and add in new todo from DB
            //input Values: Reset back to empty strings
        }).catch(error => console.log(error))

    }

    handleDelete = (_id) => {
        //Destroy delete
        //axios.delete a specific Todo via its id 
        axios.delete(`${this.url}/${_id}`).then(response =>{
            this.setState(prevState => {
                return {
                    // take the previous array of todos, and only return
                    //todos that don't have the _id of the deleted one
                    todos: prevState.todos.filter(todo => todo._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }

    handleEdit = (_id, updates) => {
        axios.put(`${this.url}/${_id}`, updates)
        .then(response => {
            // Get the updated Todo
            const updatedTodo = response.data
            this.setState(prevState => {
                return {
                    // loop through previous todos and replace the outated one with the updated one
                    todos: prevState.todos.map(todo => todo._id === _id ? updatedTodo : todo)
                }
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <TodoContext.Provider>
                value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}
                { this.props.children }
            </TodoContext.Provider>
        )
    }
}

// Higher order components used to let components like <App /> consume the `value ` object from the provider

export const withTodos = C => props => (
    <TodoContext.Consumer>
        { value => <C {...props} {...value}/> }
    </TodoContext.Consumer>
)

export default TodoProvider