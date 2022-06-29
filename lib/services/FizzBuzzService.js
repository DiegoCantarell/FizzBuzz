class FizzBuzzService{
    static applyValidationInExplorer(explorer){



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



    static applyValidationInNumber(number){
        if(number%3 === 0 && number%5 === 0){
            return "FIZZBUZZ";
        }
        else if(number%3 === 0){
            return "FIZZ";
        }

        else if(number%5 == 0 ){
            return "BUZZ";
        }
        else{
            return number;
        }


    }
}
module.exports = FizzBuzzService;

