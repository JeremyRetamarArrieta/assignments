import React from 'react'
import TodoList from './components/TodoList.js'
import AddTodoForm from './compents/AddTodoForm.js'
import { withTodos} from './context/TodoProvider.js'


class App extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }

    componentDidMount(){
        // Call getTodos from context on page load
        this.props.getTodos()
    }

    handleChange = e => {
        const{ name, value } = e.target
        this.setState({ [name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        //Call addTodo method from out context and pass it our input values
        // from the state
        this.props.addTodo(this.state)
        // After sending the state inputs to context, reset the values for the user
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        })
    }

    render(){
        return(
            <div className="app-container">
                <h1>CRUD APP</h1>
                <h6>(To do list)</h6>
            </div>
        )
    }
}



export default App