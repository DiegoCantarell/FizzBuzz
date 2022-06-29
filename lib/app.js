const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request, response) => {
    const mission = request.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission:request.params.mission,quantity:amountExplorers});
});
app.get("/v1/explorers/usernames/:mission",(request, response) => {
    const mission = request.params.mission;
    const usernamesExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission:request.params.mission,usernames:usernamesExplorers});
});
app.get("/v1/fizzbuzz/:score",(request, response) => {
    const score = request.params.score;
    const scoreFizzBuzz = ExplorerController.getFizzBuzzService(score)
    response.json({score:request.params.score,trick:scoreFizzBuzz});
});
module.exports = app
