const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')



//midddlewares
app.use(express.json)
app.use(morgan('dev'))



//routes




//DB connection
mongoose.connect('mongodb://localhost:27107/first-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to DB')
})



app.listen(7000, () => {
    console.log('[+] server running on Port 7000')
})