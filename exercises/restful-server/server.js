const express = require("express")
const app = express()
const uuid = require("uuid")


app.get('/', (req, res) => {
    res.send("Hello world!");
});

