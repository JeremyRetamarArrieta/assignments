const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000

//middleware
app.use(express.json()) //parses objects - req.body
app.use(morgan('dev'))


//DB connect
mongoose.connect("mongodb://localhost:27017/raddish", {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})

//Routes


//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//Server listen