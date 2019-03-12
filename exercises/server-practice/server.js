const express = require('express')
const app = express()
const uuid = require('uuid/v4')


// fake Database

const people = [
    {
        name: "Rick",
        age: 70,
    },
    {
        name: "Morty",
        age: 14,
    },
    {
        name: "birdman",
        age: 30,
    }
]



app.get("/something" ,(reg, res) => {
    res.send("Hello World")
})

app.get("/about" , (req, res) =>{
    res.send("We like talking about our selves")
})

app.listen(5800, () =>{
    console.log("Server is running")
})

