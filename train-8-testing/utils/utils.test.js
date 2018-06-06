const utils = require('./utils')
it('should plus two numbers', () => {
    var res = utils.add(33,11)
    if (res != 44){
        throw Error(`Expected 44, but we get ${res}`)
    }
})

it('it should minus two numbers', ()=>{
    var res = utils.minus(33,11)
    if (res != 22){
    throw Error(`Expected 22, but we got ${res}`)
}
})