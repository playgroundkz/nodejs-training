const express = require('express')

var app = express()

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.send(`<h1>Salem alem</h1>`)
})

app.get('/about', (req, res) => {
    res.render('about-vars.hbs', {
        title : 'about page',
        content : "Main content",
        currentYear : new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : "Unable to handle request"
    })
})

app.listen('3000')