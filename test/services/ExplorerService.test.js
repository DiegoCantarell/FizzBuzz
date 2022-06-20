//Test for ExplorerService
const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Test for ExplorerService", () => {
    test("1. Return the list of explorers that are in node",() => {
        const explorers = [{name:"usernameTest",value:1,mission:"node"}]
        expect(ExplorerService.filterByMission(explorers,"node")).toContain('usernameTest');
        expect(ExplorerService.filterByMission(explorers,"node")).not.toBeUndefined()
       // expect(result.error).toMatch("necesitan tener un valor valido")
        //
    })

})
