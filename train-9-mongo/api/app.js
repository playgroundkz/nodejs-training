const express = require('express')
const body = require('body-parser')

var {mongoose} = require("./db/mongoose")
var {Todo} = require("./models/Todo")
var {User} = require("./models/User")


var app = express()

app.use(body.json())

app.post("/todo", (req, res)=>{
    
    var newTodo = new Todo({
        text:req.body.text
    })
    newTodo.save().then(
        (result)=>{
            res.send(result)
        },
        (err)=>{
            res.send(err)
        },
    )
})

app.listen(3000, () =>{
    console.log("node is listening 3000 port")
})