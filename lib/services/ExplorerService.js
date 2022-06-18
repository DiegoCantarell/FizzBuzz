//REFACTORING HE LOGIC THAT IS EXECUTED ON THE LIST OF EXPLORERS
class ExplorerService {
    static filterByMission(explorers, mission){ 
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");        
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.name);
        return usernamesInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){        
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");        
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
    
}
module.exports = ExplorerService


