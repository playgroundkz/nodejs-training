const expect = require('expect')
const request = require('supertest')

var simple = require("./../server/simple.js")
var {app} = require("./../server/simple-app")

/*
describe("Testing with a native mocha tools", () => {
    
    it ("Should plus two numbers", ()=>{
        var real_res = 3 + 9
        var res = simple.add(3, 9)
        if (res != real_res){
            throw new Error(`result is ${res}, it must be ${real_res}`)
        }
    })

    it ("Should plus two numbers asynchronisly", (done)=>{
        var real_res = 3 + 9
        callback = (sum) => {
            if (sum != real_res){
                throw new Error(`result is ${sum}, it must be ${real_res}`)
            }
            done()
        }
        simple.addAsync(3, 9, callback)
    })
})
*/
/*
describe("Testing with assertions", () => {
    it("Should minus two numbers", () => {        
        var v1 = 9, v2 = 3
        var correct_result = v1 - v2
        var real_result = simple.minus(v1, v2)
        expect(real_result).toBe(correct_result)
    })

    it ("Should minus two numbers asynchronisly", (done) => {
        var v1 = 15, v2 = 5
        var correct_result = v1 - v2
        simple.minusAsync(v1, v2, (real_result) => {
            expect(real_result).toBe(correct_result)
            done()
        })
    })
})
*/

describe("Testing http requests", () => {
/*
    it("Should test http qurey", (done) => {
        request(app)
        .get('/person')
        .expect((res)=>{
            expect(res.body).toInclude({
                name:"Abdurakhman",
                age : 30
            })
        })
        .end(done)
    })
    */

    
   it("Should test http qurey", (done) => {
    request(app)
    .get('/hello')
    .expect("hello")
    .end(done)
    })
})
