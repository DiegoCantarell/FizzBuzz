//test.js
const request = require("supertest");
const app = require('./../lib/app.js');

//const server = require('./../lib/server.js');
//const supertest = require('supertest')

describe('User Endpoints Tests', () => {
   test('GET / -> #1 Test for Welcome', () => {
       return request(app)
       .get("/")
       .then(response => {
        //expect(response).toBe("FizzBuzz Api welcome!");
        expect(response.statusCode).toBe(200);
        //done();
        })
    })
})
