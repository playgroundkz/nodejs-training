const request = require('request')

const google_api = require('../google_key')

geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address)
    var encodedUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${google_api.key}`

    request({
        url:encodedUrl,
        json:true
    },
    (error, response, body) => {
        
        if (error){
            callback("System error has happened")
        }else if(body.status == 'ZERO_RESULT'){
            callback('result not found')
        }else if(body.status != 'OK') {
            callback("Something went wrong", body.error_message)
        }else{
            callback(undefined, {
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng,
            })
        }
    })
}

hello = (val) => {
    console.log("hello")
    console.log(val)
}

module.exports.geocodeAddress = geocodeAddress