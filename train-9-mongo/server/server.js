const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/TodoApp")
/*
var Todo = mongoose.model("Todo", {
    text : {
        type:String,
        required: true,
        minlenght:1,
        trim:true,
    },
    completed : {
      type:Boolean,
      default: false,
    },
    completedAt : {
        type:Number,
        default:null
    }       
})
*/
/*
var newTodo = new Todo({
    text:"Walk a dog"
});

newTodo.save().then(
    (result) => {
        console.log("New model was successfully added to database")
        console.log(result)
    },
   (err) => {
    console.log("Something went wrong! ", err)
})
*/