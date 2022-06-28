//const ExplorerController = require("./controllers/ExplorerController");
//const express = require("express");
//const app = express();
//app.use(express.json());

const app = require("./app.js")

const port = 3000;

/*
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
*/
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
