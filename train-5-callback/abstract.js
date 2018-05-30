const yargs = require('yargs')

const geocode = require('./geocode/geocode')

const argv = yargs.options({
    a : {
        describe : "address of geo code",
        demand : true,
        alias : 'address',
        string : true,
    }
})
.help()
.alias('help', 'h')
.argv

 geocode.geocodeAddress(argv.address, (error, result) => {
     if (error){
         console.log(error)
     }else{
         console.log(JSON.stringify(result, undefined, 2))
     }
 })
//hello('test val');