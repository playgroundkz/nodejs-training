const express = require('express')

var app = express()

app.get('/', (req, res)=>{
    res.send(`<h1>Salem alem</h1>`)
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : "Unable to handle request"
    })
})

app.get('/not', (req, res) => {
    res.send([ 
        {
            name : "Abdurakhman",
            age : 30,
        },
        {
            name : "Agatay", 
            age : 29
        }
    ] )
})

app.listen('3000')

module.exports.app = app