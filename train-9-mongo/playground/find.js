const {MongoClient, ObjectID} = require ('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err){
        return console.log("Unable to connect to mongo db")
    }
    
    console.log("Successfully connected to mongodb server!")
    
    db = client.db("TodoApp")
    
    
    //db.collection("users")
    //db.collection("Todos")
    
    db.collection("users").find({name:"Berik"}).count().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2))
    },
    (err) => {
      console.log("Something happened wrong. ", err)  
    })
    client.close()
})