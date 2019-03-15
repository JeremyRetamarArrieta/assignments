const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required
    }
})


module.exports = mongoose.model("Bounty", bountySchema)