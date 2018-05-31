
const weather = require('./weather/weather')

weather.getTemperature(42.3601,-71.0589, (error, result) => {
    if (error){

    }else{
        console.log(`Temperature is ${result.temperature}. It feels like ${result.apparentTemperature}` )
    }
});