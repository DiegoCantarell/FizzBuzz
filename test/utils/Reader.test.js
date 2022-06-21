const Reader = require("./../../lib/utils/Reader");
describe("Unit Test for Reader Class", () => {
	
    test("Create a Reader -> readJsonFile(filePath)", () =>{
        //Here goes the code to use in the app
	    
        /*const path = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
            "javascript",
            "reasonML",
            "elm"
            ]
            }
        */

        const path = "explorers.json";
        const result = Reader.readJsonFile(path);

        //expect(user.bio).toBe("Bio")
        expect(result).not.toBeUndefined();
    });
});
