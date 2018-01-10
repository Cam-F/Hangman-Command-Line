// Letter constructor

var Letter = function (letter, display) {

    this.letter = letter.toUpperCase();
    this.display = " _ ";

    // Methods

    // Initially will return underscores
    this.printLetters = function () {
        return this.display;
    }

    // Changes the character to the correct letter
    this.changeLetter = function() {
        this.display = letter
    }
}
module.exports = Letter;