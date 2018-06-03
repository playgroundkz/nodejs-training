const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000

var app = express()

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.set('views', __dirname + '/views')

app.set('view engine', 'hbs')


// log midlleware 
// app.use((req, res, next) => {
//     var log = `time=${new Date().toString()}; method=${req.method}; url=${req.url}\n`;
//     console.log(log)
//     fs.appendFile('server.log',log, (err)=>{
//             if (err){
//                 throw err
//             }
//         // console.log('Couldnot write log data to server.log data')
//     })
//     next()
// })

// maintenance middleware
// app.use((req, res, next)=>{
//     res.render('maintenance')
// })


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

app.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs', {
        title : 'Portfolio page',
        content : "There all my projects",
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

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})