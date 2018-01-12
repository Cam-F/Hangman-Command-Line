// NPM Packages
var figlet = require("figlet");
var inquirer = require("inquirer");

// My Modules
var Movie = require("./Movie");
var Letter = require("./Letter");

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
                console.log("Go away then????");
            } else {
                guess();
            }
        });
    }
}

// Guess
var guess = function (input) {
    inquirer.prompt({
        name: "guess",
        message: "Guess a letter!"
    }).then(function (answer) {
        // var newLetter = new (answer.guess);
    })
}


// First time play(If i want to add a stat component)
playGame(true);