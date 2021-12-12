var express = require('express')
const { Validator } = require('express-json-validator-middleware')
const createSchema = require('./api/create_schema')

const { validate } = new Validator()
var router = express.Router()


router.use(express.json())

var getWorkouts = function(req,res){
    res.send("You don't workout, bro!")
}

var addWorkout = function(req,res){
    res.json(req.body)
    console.log("Should this get printed?")
    // very request is of certain type
    // Convert the API to SQL inserts
    // Return inserted 200OK
}

router.route('/')
    .get(getWorkouts)
    .post(validate({body:createSchema}),addWorkout)

module.exports = router