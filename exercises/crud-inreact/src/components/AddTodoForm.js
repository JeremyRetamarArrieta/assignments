import React from 'react'

const AddTodoForm = (props) => {
    const { title, description, price, imgUrl, handleChange, handleSubmit, btnText} = props
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"/>
            <input 
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Description"/>
            <input 
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="Image Url"/>
        <button>{ btnText }</button>
        </form>
        
    )
}

export default AddTodoForm