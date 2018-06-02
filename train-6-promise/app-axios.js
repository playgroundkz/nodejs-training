const yargs = require('yargs')
const axios = require('axios')

const geocode = require('./geocode')
const weather = require('./weather')

argv = yargs.options({
    a : {
        describe : "Adress to fetch",
        demand : true,
        alias:'address',
        string:true
    }
})
.help()
.alias('help', 'h')
.argv

var decodedAddress = encodeURIComponent(argv.address)

var geocodeUrl = `${geocode.url}?address=${decodedAddress}&key=${geocode.key}`

axios
    .get(geocodeUrl)
    // address request
    .then((response)=>{
        if(response.data.status != 'OK'){
            throw new Error("Something went wrong with address fetching")
        }
        var res = response.data.results[0]
        console.log(`Adress is ${res.formatted_address}`)
        var weatherUrl = `${weather.url}/${weather.key}/${res.geometry.location.lat},${res.geometry.location.lng}`
        return axios.get(weatherUrl)
    })
    // weather request
    .then((response)=>{
        if (response.statusText != 'OK'){
            throw new Error("Something went wrong with forecast fetching")
        }
        var currently = response.data.currently
        console.log(`Temperature is ${currently.temperature}. It feels like ${currently.apparentTemperature}`)
    })
    // error handling
    .catch((e)=>{
        console.log("error happened. It is so sad")
        console.log(e.errorMessage)
    })



