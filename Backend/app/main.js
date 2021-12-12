const express = require('express')
const app = express()
const port = 3000

const workout = require('./workout')

app.use('/workout',workout)

app.listen(port,() => {
    console.log("Server is running")
})