const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/TodoApp")

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

var newUser = new User({
    name: "Berik",
//    age: 30
})

newUser.save().then((res)=>{
    console.log("new user model was entered")
    console.log(JSON.stringify(res))
}, 
    (err)=>{
    console.log("Unable to save user model ", err)
})