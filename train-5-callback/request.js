//http://maps.googleapis.com/maps/api/geocode/json?address=aqtau

const request = require('request')

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address=aqtau',
    json:true,
},
    (error, response, body)=>{
//        console.log(JSON.stringify(body, undefined, 2))
        console.log(`lat = ${body.results[0].geometry.location.lat}`)

        console.log(`lng = ${body.results[0].geometry.location.lng}`)
})
