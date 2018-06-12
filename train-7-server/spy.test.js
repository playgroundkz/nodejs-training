const expect = require('expect')
const rewire = require('rewire')

var db = require('./spy-db.js')

var app = rewire('./spy-app.js')

describe( "App Spy", () => {

    it ("Testing a spy test tecniques", () =>{
        var spy = expect.createSpy()
    
        spy('Abdurakhman', 30)

        expect(spy).toHaveBeenCalledWith("Abdurakhman", 30)
    })


    it( "Testing app dave user function", () => {
        db = {
            saveUser : expect.createSpy()
        };
        app.__set__('db', db)

        var email = "Abdurakhman"
        var password = "123abc"

        app.userSignUp(email, password)
        
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    } )
    
} )