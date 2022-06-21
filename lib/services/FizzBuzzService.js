class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        

        // Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
        // Score: 3, Trick: FIZZ.
        // Score: 4, Trick: 4.
        // Score: 5, Trick: 5.

        const assignFizzTrick = function(explorer){
            if(explorer.score%3 === 0 && explorer.score%5 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }
            else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }

            else if(explorer.score%5 == 0 ){
                explorer.trick = "BUZZ";
                return explorer;
            }
            else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };

        const explorersInNodeAndFizzTrick = explorer.map((explorer) => assignFizzTrick(explorer));
        return explorersInNodeAndFizzTrick;
    }
}
module.exports = FizzBuzzService;

