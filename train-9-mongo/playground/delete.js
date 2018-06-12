const {MongoClient, ObjectID} = require ('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err){
        return console.log("Unable to connect to mongo db")
    }
    
    console.log("Successfully connected to mongodb server!")
    
    db = client.db("TodoApp")
    
    //db.collection("users")
    //db.collection("Todos")
    
    // deleteMany
    // db.collection("Todos").deleteMany({text : "Eat lunch"}).then((result) => {
    //     console.log(result)
    // })
    // deleteOne
    // db.collection('Todos').deleteOne({text:"Eat lunch"}).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
        console.log(result);
    },
    (err) => {
        console.log("Something went wrong while deleting", err)
    }
    )
    client.close()
})