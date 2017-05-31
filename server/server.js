var express = require('express')
var bodyParser = require('body-parser')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

// Save new things

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    console.log(req.body)
    var user = new Todo({
        text: req.body.text
    })

    user.save().then((doc) => {
        console.log(doc)
        res.status(200).send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((err, data) => {
        if (err) return console.log(err)
        res.send(data)
    })
})


app.listen(8080, () => {
    console.log('Started on port 8080')
})


// User

module.exports = { app }

