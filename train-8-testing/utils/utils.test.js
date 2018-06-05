const utils = require('./utils')
it('should plus two numbers', () => {
    var res = utils.add(33,11)
    if (res != 44){
        throw Error(`Expected 44, but we get ${res}`)
    }
})