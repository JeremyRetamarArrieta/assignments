const express = require('express')
const bountiesRouter = express.Router()
const uuid = require('uuid/v4')


let characters = [
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: false,
        bountyAmount: 4000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 10000,
        type: "Jedi",
        _id: uuid()   
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: false,
        bountyAmount: 4000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Yoda",
        lastName: null,
        living: false,
        bountyAmount: 10000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: true,
        bountyAmount: 837,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Talon",
        living: true,
        bountyAmount: 3764,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Cognus",
        living: false,
        bountyAmount: 42344,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Zannah",
        living: true,
        bountyAmount: 5344,
        type: "Sith",
        _id: uuid()
    },
]

bountiesRouter.route("/")
    .get((req, res) => {
        res.send(characters)
    })
    .post((req, res) => {
        const newBounty = req.body
        characters.push(newBounty)
        res.send(newBounty)
    })

bountiesRouter.route("/:_id")

    .get((req, res) => {
        const foundBounty = characters.find(item => item._id === req.params._id )
        
        res.send(foundBounty)
    })

    .put((req, res) => {
        console.log(req.params)
        const foundBounty =characters.find(item => item._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })

    .delete((req, res) => {
        const updatedDB = characters.filter(item => item._id !== req.params._id)
        characters = updatedDB
        res.send("Character Deleted")
    })

module.exports = bountiesRouter