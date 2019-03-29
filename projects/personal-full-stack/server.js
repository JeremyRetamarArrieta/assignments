const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

