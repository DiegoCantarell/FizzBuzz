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


   test('GET / -> #2 Test for get the explorers names', () => {
       return request(app)
       .get("/v1/explorers/:mission")
       .then(response => {
        //expect(response.json).toBe("FizzBuzz Api welcome!");
        expect(response.statusCode).toBe(200);

        const expectedText1 = ("[\"Woopa1\",\"Woopa2\",\"Woopa3\",\"Woopa4\",\"Woopa5\",\"Woopa11\",\"Woopa12\",\"Woopa13\",\"Woopa14\",\"Woopa15\"]")
        expect(response.text).toBe(expectedText1);
       // done();
        })
    })

   test('GET / -> #3 Test for get the explorers amount', () => {
       return request(app)
       .get("/v1/explorers/amount/:mission")
       .then(response => {
        //expect(response.json).toBe("FizzBuzz Api welcome!");
        expect(response.statusCode).toBe(200);
        expectedText2 = ("{\"mission\":\":mission\",\"quantity\":10}")
        expect(response.text).toBe(expectedText2);
       // done();
        })
    })

})
