const express = require('express')
const todoRouter = express.Router()


// GET ALL (Collection)
app.get("/people", (req, res) => {
    res.send(people)
})

// POST - Add one
app.post('/people', (req, res) => {
    // Add ID to the request body
    req.body._id = uuid()
    // Add it to the fake database
    people.push(req.body)
    // Send back updated Object, (or entire collection if you want)
    res.send(req.body)
})

// GET ONE (Resource)
app.get('/people/:_id', (req, res) => {
    // Grab ID from the req.params object
    const ID = req.params._id 
    // Find the person object by it's ID in the database
    const foundPerson = people.find(person => person._id === ID)
    // Send back person Object
    res.send(foundPerson)
})

// DELETE - delete one
app.delete("/people/:_id", (req, res) => {
    // Create new array by filtering out the person who has the ID from req.params
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    // Re-assign our old database (array) to the new udpated array
    people = updatedPeople
    // Send back updated array to confirm object(resource) was removed
    res.send(people)
})

// PUT - Update one
app.put("/people/:_id", (req, res) => {
    // Use the ID to find the object to update
    const foundPerson = people.find(person => person._id === req.params._id)
    // Update that object
    Object.assign(foundPerson, req.body)
    // Send back the updated Object
    res.send(foundPerson)
})

module.exports = todoRouter
