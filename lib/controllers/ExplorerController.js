// CREATING THE CONTROLLER TO CONNECT THE FUNCTIONALITY WITH THE SERVER
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        console.log(ExplorerService.filterByMission(explorers,"node"))

    }

}
module.exports = ExplorerController;
