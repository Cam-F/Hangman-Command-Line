// NPM Packages
var figlet = require("figlet");
var inquirer = require("inquirer");

// My Modules
var Letter = require("./Letter");
var Movie = require("./Movie");

// Inquirer prompts
var playGame = function (firstTime) {
    if (firstTime) {
        console.log(figlet.textSync("WELCOME!"));

        // Start prompt
        inquirer.prompt({
            name: "start",
            type: "rawlist",
            message: "Wanna play a game?",
            choices: ["YES", "NO"]
        }).then(function (answer) {
            if (answer.start === "NO") {
                console.log(figlet.textSync("LOL BYE THEN!"));
            } else {
                getWord();
            }
        });
    }
}

var getWord = function(){
    var newMovie = new Movie();
    Letter(newMovie);
    guess();
}

// Guess
function guess(word) {

    inquirer.prompt({
        name: "guess",
        message: "Guess a letter!"
    }).then(function (answer) {
        var userGuess = answer.guess.toUpperCase();
        console.log(userGuess);
        
        // for (var k = 0; k < )
    })
}


// First time play(If i want to add a stat component)
playGame(true);