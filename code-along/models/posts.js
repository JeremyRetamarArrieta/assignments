const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    summary: String,
    imgUrl: {
        type: String,
        default: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fillustration-cartoon-funny-radish-icon-260nw-1094993669.jpg&f=1",
    },
    votes: {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "sports", "culture", "science", "arts", "celebrity", "chocolate", "hobbies", "politics"],
        required: true,
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            requried: true,
        },
        comment: {
            type: String,
            required: true,
        },
        timeStamp: {
            type: Date,
            default: Date.now,
        },
        tags: [{
            type: String,
            default: []
        }]
    }]
})