const mongoose = require('mongoose')

var User = mongoose.model("Users", {
    name : {
        type: String,
        required : true,
        minlenght : true,
        trim: true
    },
    age : {
        type:Number,
        default:null
    }
    
})

module.exports = {User}