const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')



//get all
dotoRouter.get("/", (req, res) =>{
    Todo.find((err, todos) => {
        if(err){
            //handleError
            res.status(500)
            return res.send(err)
        }
        //send back response
        return res.status(200).send(todos)
    })
})

todoRouter.post("/", (req, res) =>{
    //create new todo object using our schema
    const newTodo = new Todo(req.body)

    newTodo.save((err, newTodoObj) =>  {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

todoRouter.get("/:_id",  (req, res) => {
    Todo.findOne({_id: req.params._id}, (err, foundTodo) =>{
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(foundTodo)
    })
})


todoRouter.delete(":_id", (req, res) => {
    Todo.findOneAndDelete({_id: req.params._id} , (err, deletedTodo) =>{
        if (err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully delted Item with title ${deletedTodo.title}`)
    })
})


todoRouter.put("/:_id", (res, req) => {
    Todo.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedTodo) => {
            if (err) {
                res.status(500)
                return
            }
        }
    )
})


module.exports = todoRouter