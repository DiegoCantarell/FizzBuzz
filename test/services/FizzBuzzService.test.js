//TEST FOR FIZZBUZZ SERVICE
const FizzBuzzService = require('./../../lib/services/FizzBuzzService')
describe('3. Test for FizzBuzzService',() => {
    const userTest = [
                        {
                        "name": "Woopa1",
                        "githubUsername": "ajolonauta1",
                        "score": 1,
                        "mission": "node",
                        "stacks": [
                        "javascript",
                        "reasonML",
                        "elm"
                        ]
                        },
   
    
                        {
                        "name": "Woopa2",
                        "githubUsername": "ajolonauta2",
                        "score": 9,
                        "mission": "node",
                        "stacks": [
                        "javascript",
                        "reasonML",
                        "elm"
                        ]
                        },
                        
    

                        {
                        "name": "Woopa3",
                        "githubUsername": "ajolonauta3",
                        "score": 25,
                        "mission": "node",
                        "stacks": [
                        "javascript",
                        "reasonML",
                        "elm"
                        ]
                        },
                        
    
    
                        {
                        "name": "Woopa4",
                        "githubUsername": "ajolonauta4",
                        "score": 15,
                        "mission": "node",
                        "stacks": [
                        "javascript",
                        "reasonML",
                        "elm"
                        ]
                        }
                      ]  


    test('3. Validate the functionality of FizzBuzzService',() => { 
        
        expect(FizzBuzzService.applyValidationInExplorer(userTest)).not.toBeUndefined()
        const userInTest = FizzBuzzService.applyValidationInExplorer(userTest)
        //Test for cases with modules different than 0 using 3 or 5 as divisors 
        expect(userInTest[0].trick).toBe(1)
        //Test for cases with modules equal to 0 using 3 as a divisor
        expect(userInTest[1].trick).toBe("FIZZ")
        //Test for cases with modules equal to 0 using 5 as a divisor
        expect(userInTest[2].trick).toBe("BUZZ")
        //Test for cases with modules equal to 0 using 3 and 5 as a divisor
        expect(userInTest[3].trick).toBe("FIZZBUZZ")



    })
})
