const yargs = require('yargs')
const axios = require('axios')

const geocode = require('./geocode')
const weather = require('./weather')

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
/*
var encodedAddress = encodeURIComponent(argv.address);
geoCodeUrl = `${geocode.url}?address=${encodedAddress}&key=${geocode.key}`;
console.log(geoCodeUrl)

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }
  
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    throw new Error(JSON.stringify(response))
    console.log(JSON.stringify(response))
} ).catch( (e) => {
    console.log('Something went wrong')
    console.log(e.errorMessage)
} )
*/


var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
//   return axios.get(weatherUrl);
})

/*
.then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
})*/
.catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});
