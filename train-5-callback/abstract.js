const request = require('request')
const google_api = require('./google_key')

var encodedUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=${google_api.key}`
console.log(encodedUrl)
request({
    url:encodedUrl,
    json:true
},
(error, response, body) => {
    if (error){
        console.log("System error has happened")
    }else if(body.status == 'ZERO_RESULT'){
        console.log('result not found')
    }else if(body.status != 'OK') {
        console.log("Something went wrong")
        console.log(body.error_message)
    }else{
        console.log("Successfully retrieved")
        console.log(body.status)
        console.log("adress = " , body.results[0].formatted_address)
    }
})