var db = require('./spy-db.js')

module.exports.userSignUp = (email, password)=>{
    // checking email and password
    db.saveUser({email, password});
    // sending a email
}
