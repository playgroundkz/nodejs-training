const request = require('request')

const weather_conf = require('../keys/weather_key')
getTemperature = (lat, lng) => {
    var api_url = `${weather_conf.api_url}/${weather_conf.key}/${lat},${lng}`
    return new Promise((resolve, reject)=>{
        request(
            {
                url:api_url,
                json:true,
            },
            (error, response, body) => {
                if (error){
                    reject('Cannot connect to forecast api server')
                }else if(response.statusCode != 200){
                    reject('Unable to fetch data from forecast server. ' + api_url)
                }else{
                    resolve(
                        {
                            'temperature' : body.currently.temperature,
                            'apparentTemperature' : body.currently.apparentTemperature,
                        })
                }
            }
        )
    })
}

module.exports.getTemperature = getTemperature
module.exports.url = weather_conf.api_url
module.exports.key = weather_conf.key