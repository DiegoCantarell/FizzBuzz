// CREATING THE CONTROLLER TO CONNECT THE FUNCTIONALITY WITH THE SERVER
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const value = ExplorerService.filterByMission(explorers,"node")
        return value

    }
    /*
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        console.log(ExplorerService.getExplorersUsernamesByMission(explorers,"node")
    }
    */
}
module.exports = ExplorerController;
