const fs = require("fs");

// Part 1 Read json file ===========================
//const rawdata = fs.readFileSync("explorers.json");
//const explorers = JSON.parse(rawdata);

const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo


/*
// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
//console.log(usernamesInNode)
*/

const ExplorerService = require("./lib/services/ExplorerService");

const explorersOnlyInNode = ExplorerService.filterByMission(explorers, "node");
console.log("Explorers only in Node:\n"+ explorersOnlyInNode+"\n");

const AmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

console.log("AmountOfExplorersByMission: \n"+ AmountOfExplorersByMission+"\n");

const ExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log("Explorers usernames by mission: \n"+ ExplorersUsernamesByMission+"\n");

const FizzBuzzService = require("./lib/services/FizzBuzzService");
const value = FizzBuzzService.applyValidationInExplorer(explorers);
console.log(value);

const ExplorerController = require("./lib/controllers/ExplorerController");


console.log("\tResultado #1\n");
const resultExplorerControllerByMission = ExplorerController.getExplorersByMission("node");
console.log(resultExplorerControllerByMission);

console.log("\tResultado #2\n");
const resultExplorerControllerUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
console.log(resultExplorerControllerUsernamesByMission);


console.log("\tResultado #3\n");
const resultAmount = ExplorerController.getExplorersAmountByMission("node");
console.log(resultAmount);


console.log("\tResultado #4\n");
const resultFizzBuzzService = ExplorerController.getFizzBuzzService(15);
console.log(resultFizzBuzzService);

