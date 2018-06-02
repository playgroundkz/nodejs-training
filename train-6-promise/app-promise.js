const yargs = require('yargs')

const geocode = require('./geocode')
const weather = require('./weather.js')
// const weather = require('./weather/weather')

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

geocode.geocodeAddress(argv.address).then(
    (result)=>{
        console.log(result.address );
        return weather.getTemperature(result.latitude, result.longitude)
    }).then((result)=>{
        console.log(`Temperature is ${result.temperature}. It feels like ${result.apparentTemperature}`)
    }).catch( (e) => {
        console.log(e)
    } )