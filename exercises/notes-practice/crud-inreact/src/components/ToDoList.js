import React from 'react'

const ToDoList = (props) =>{

    const mappedTodos = props.todos.map(todo => <Todo {...todo} key={todo._id}/>)

    return (
        <div>
             
        </div>
    )
}

export default ToDoList