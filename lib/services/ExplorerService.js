//REFACTORING THE LOGIC THAT IS EXECUTED ON THE LIST OF EXPLORERS
class ExplorerService {
    static filterByMission(explorers, mission){
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
    }
    
}
module.exports = ExplorerService
