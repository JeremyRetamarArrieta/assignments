const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// Fake Database
let people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid()
    },
    {
        name: "Birdman",
        age: "unknown",
        _id: uuid()
    }
]

// Middleware
app.use(express.json())

//Routes
app.use("/todos", require('routes/todos.js'))


app.listen(5700, () => {
    console.log("Server is running on port 5800")
})
