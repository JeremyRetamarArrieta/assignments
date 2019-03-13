const express = require('express')
const app = express()

app.use(express.json())

app.use("/bounties", require('./routes/bounties.js'))

app.listen(5025, () => {
    console.log("Server is running on Port 5025")
})