const express = require("express")
const bodyParser = require("body-parser")


var app = express()

app.use(bodyParser.json())

app.listen(3000, ()=>{
    console.log("App listeing post 3000")
})