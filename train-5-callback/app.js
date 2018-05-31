const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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

geocode.geocodeAddress(argv.address, (error, result) => {
    if (error){
        console.log(error)
    }else{
        console.log(result.address)
        weather.getTemperature(result.latitude, result.longitude, (error, result) => {
            if (error){
                console.log(error)
            }else{
                console.log(`Temperature is ${result.temperature}. It feels like ${result.apparentTemperature}`)
            }
        })
    }
})