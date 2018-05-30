const request = require('request')
const yargs = require('yargs')

argv = yargs.options({
    address : {
        describe:'enter adress',
        demand:true,
        alias : 'a'
    }
})
.help()
.argv

console.log('adress = ' , argv.address)
var encodedUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`

request({
    url : encodedUrl,
    json: true,
}, 
(error, response, body) => {
    if (body.status != 'OK'){
        console.log('Something went wrong')
        console.log(body.error_message)
        return false
    }
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
})