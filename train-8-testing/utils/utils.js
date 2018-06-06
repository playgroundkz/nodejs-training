module.exports.add = (a, b)=> a+b
module.exports.minus = (a, b)=> a-b

module.exports.setUserName = (user, fullName) => {
    var names = fullName.split(" ")
    user.firstName = names[0]
    user.lastName = names[1]
    return user
}