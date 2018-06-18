const express = require('express')

var app = express()

app.get("/person", (req, res) => {
    res.send({
        name:"Abdurakhman",
        age : 30
    })
})

app.get("/hello", (req, res) => {
    res.send('hello')
})

var port = 3002
app.listen(port, () => {
    console.log(`Server is listening ${port} port`)
})

module.exports = {app}