const request = require('request')

const weather_conf = require('../weather_key')

getTemperature = (lat, lng, callback) => {
    request(
        {
            url:`${weather_conf.api_url}/${weather_conf.key}/${lat},${lng}`,
            json:true,
        },
        (error, response, body) => {
            if (error){
                callback('Cannot connect to forecast api server')
            }else if(response.statusCode != 200){
                callback('Unable to fetch data from forecast server')
            }else{
                callback(undefined, 
                    {
                        'temperature' : body.currently.temperature,
                        'apparentTemperature' : body.currently.apparentTemperature,
                    })
            }
        }
    )
}

module.exports.getTemperature = getTemperature