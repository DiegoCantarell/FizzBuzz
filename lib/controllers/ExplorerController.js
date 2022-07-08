// CREATING THE CONTROLLER TO CONNECT THE FUNCTIONALITY WITH THE SERVER
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
//The utils to work with the bot
const TelegramBot = require("node-telegram-bot-api");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const namesList = ExplorerService.filterByMission(explorers,mission);
        return namesList;

    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesList = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return usernamesList;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return amount;
    }
    static getFizzBuzzService(number){
        const FizzBuzzValue = FizzBuzzService.applyValidationInNumber(number);
        return FizzBuzzValue;
    }
    static listenBotFizzBuzz(accountToken){
        const token = accountToken;

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });
        bot.on("polling_error", console.log);
        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);

            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getFizzBuzzService(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }


        });


    }

}//End


module.exports = ExplorerController;
