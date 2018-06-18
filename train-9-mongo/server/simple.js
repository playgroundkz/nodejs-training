module.exports.add = (a, b)=>{
    return a+b
}

module.exports.addAsync = (a, b, callback)=>{
    setTimeout(
        callback(a + b)
    , 1500)
}

module.exports.minus = (a, b) => {
    return a - b
}

module.exports.minusAsync = (a, b, callback) => {
    setTimeout(
        callback(a - b),
        1500
    )
}