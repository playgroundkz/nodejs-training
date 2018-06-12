const {MongoClient, ObjectID} = require ('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err){
        return console.log("Unable to connect to mongo db")
    }
    
    console.log("Successfully connected to mongodb server!")
    
    db = client.db("TodoApp")
    
    //db.collection("users")
    //db.collection("Todos")
    /*
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5b20249236f5bc288c357183")
    },{
        $set:{
            completed:true,
            text:"some thing was done! Really"
        }
    },
    {
        returnOriginal:false
    }).then( (result) =>{
        console.log("Succesfulley updated")
        console.log(result)
    })
  */
 // 
    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b202d5db811d30890fa1821')
    },
    {
        $set:{
            name: "Berik Kozhagali"
        },
        $inc:{
            age:1
        }
    },
    {
        returnOriginal:false
    }
    ).then( (result) => {
        console.log("Users collection was updated")
        console.log(result)
    } )
    client.close()
})
// 