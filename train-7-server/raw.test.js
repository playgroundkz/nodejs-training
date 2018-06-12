const request = require ('supertest')
const expect = require('expect')

const app = require('./raw').app

it ("it should return about page", (done)=>{
    request(app)
        .get('/about')
        .expect('about page')
        .end(done)
})


it ("should check not found page", (done)=> {
    request(app)
        .get('/not')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({
                name:"Abdurakhman",
                age : 30
            })
        })
        .end(done)
})
