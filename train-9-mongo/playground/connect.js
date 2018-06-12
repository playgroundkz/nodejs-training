const MongoClient = require ('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err){
        return console.log("Unable to connect to mongo db")
    }
    
    console.log("Successfully connected to mongodb server!")
    
    db = client.db("TodoApp")
    
    db.collection("users").insertOne({
        name : "Serik",
        age : 30,
        location : "Kazakhstan"
    }, (err, result) =>{
        if (err){
            return console.log("Unbale to add a new doc to Users collection", err)
        }
        console.log("A new doc successfully added to Users collection", JSON.stringify(result.ops, undefined, 2))
    })
    
//    db.collection("Todos").insertOne({
//        text: "Something to do",
//        completed : false
//    }, (err, result) => {
//        if (err){
//            return console.log("Unable to insert data", err)
//        }        
//        console.log("Row succesfullty inserted", JSON.stringify(result.ops, undefined, 2))
//    })
    
    client.close()
})