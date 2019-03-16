const express = require('express')
const bountiesRoutes = express.Router()
const Bounty = require('../models/bountySchema.js')
const uuid = require('uuid/v4')


// let characters = [
//     {
//         firstName: "Obi-Wan",
//         lastName: "Kenobi",
//         living: false,
//         bountyAmount: 4000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Anakin",
//         lastName: "Skywalker",
//         living: true,
//         bountyAmount: 10000,
//         type: "Jedi",
//         _id: uuid()   
//     },
//     {
//         firstName: "Obi-Wan",
//         lastName: "Kenobi",
//         living: false,
//         bountyAmount: 4000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Yoda",
//         lastName: null,
//         living: false,
//         bountyAmount: 10000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Mace",
//         lastName: "Windu",
//         living: true,
//         bountyAmount: 837,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Talon",
//         living: true,
//         bountyAmount: 3764,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Cognus",
//         living: false,
//         bountyAmount: 42344,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Zannah" ,
//         living: true,
//         bountyAmount: 5344,
//         type: "Sith",
//         _id: uuid()
//     },
// ]


bountiesRoutes.get("/" , (req, res , next) =>{
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(bounties)
    })
})

bountiesRouter.post("/" , (req, res) => {
    
    const newBounty = new Bounty(req.body)

    newBounty.save((err, newBountyObj) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newBountyObj)
    })
})


bountiesRouter.get("/:_id", (req , res) =>{
    Bounty.findOne({_id: req.params._id} , ( err, foundBounty) =>{
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(foundBounty)
    })
})

bountiesRouter.delete(":_id", (req, res) => {
    Bounty.findOneAndDelete({_id: req.params._id} , (err, deletedBounty) => {
            if (err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(`Successfully deleted ${deletedBounty.title}`)
        })
})


bountiesRouter.put("/:_id", (res, req) => {
    Bounty.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err , updatedBounty) => {
            if (err) {
                res.stuts(500)
                return
            }
        }
    )
})

module.exports = bountiesRoutes