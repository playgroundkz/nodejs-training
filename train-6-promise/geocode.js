const request = require('request')

const google_api = require('../keys/google_key')

geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address)
    var encodedUrl = `${google_api.url}?address=${encodedAddress}&key=${google_api.key}`
    return new Promise((resolve, reject) => {
        request({
            url:encodedUrl,
            json:true
        },
        (error, response, body) => {
            if (error){
                reject("System error has happened")
            }else if(body.status == 'ZERO_RESULT'){
                reject('result not found')
            }else if(body.status != 'OK') {
                reject("Something went wrong", body.error_message)
            }else{
                resolve({
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng,
                })
            }
        })
    });
}

module.exports.geocodeAddress = geocodeAddress
module.exports.url = google_api.url
module.exports.key = google_api.key
