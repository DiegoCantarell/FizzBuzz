//Test for ExplorerController
const ExplorerController =  require('./../../lib/controllers/ExplorerController')
describe('Test for ExplorerController',() => {
    test('#1 Test for Static Method getExplorersByMission',() => {
        mission = "node"
        expect(ExplorerController.getExplorersByMission(mission)).toBeDefined();
        expect(ExplorerController.getExplorersByMission(mission)).not.toBeUndefined()
        expect(ExplorerController.getExplorersByMission(mission).length).toBe(10)
    })


    test('#2 Test for Static Method getExplorersUsernamesByMission',() => {
        mission = "node"
        expect(ExplorerController.getExplorersUsernamesByMission(mission)).toBeDefined();
        expect(ExplorerController.getExplorersUsernamesByMission(mission)).not.toBeUndefined()
        expect(ExplorerController.getExplorersUsernamesByMission(mission).length).toBe(10)
    })


})
