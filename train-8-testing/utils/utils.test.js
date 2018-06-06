const expect = require('expect')

const utils = require('./utils')

it('should plus two numbers', () => {
    var res = utils.add(33,11)
    if (res != 44){
        throw Error(`Expected 44, but we get ${res}`)
    }
})

it('should minus two numbers', () => {
    var res = utils.minus(33,11)
    expect(res).toBe(22)
    // if (res != 22){
    //     throw Error(`Expected 22, but we get ${res}`)
    // }
})

it ('it should verify names', ()=>{
    var object = {
        firstName : '',
        lastName : '',
        age : 25,
    }
    var firstName = "Abdurakhman"
    var lastName = "Taskibaev"
    var fullName = `${firstName} ${lastName}`

    var resObject = utils.setUserName(object, fullName)

    expect(resObject).toInclude({
        firstName : firstName,
        lastName : lastName,
    })
})