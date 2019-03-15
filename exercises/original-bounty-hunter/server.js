const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


// Middleware runs on every request
app.use(express.json())
app.use(morgan('dev'))

//conntect to db
mongoose.connect("mongodb://localhost:27107/bountydb-1", {useNewUrlParser: true}), () => {
    console.log(`[o] Connected to the DB`)
}
// routes
app.use("/bounties", require('./routes/bountiesRoutes.js/index.js'))


// global error handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})