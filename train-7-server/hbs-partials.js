const express = require('express')
const hbs = require('hbs')


var app = express()

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.render('home.hbs', {
        title : 'home page',
        content : "Main content",
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title : 'about page',
        content : "Main content",
    })
})


app.get('/help', (req, res) => {
    res.render('help.hbs', {
        title : 'help page',
        content : "So you can get any help here. Beleive me",
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : "Unable to handle request"
    })
})

app.listen('3000')