// My modules
var Movie = require("./Movie");

// Function
var Letter = function (movie) {
    this.word = movie
    this.blankArr = [];
    this.remaining = word.movie.length;
    this.lives = 10;

    for (var i = 0; i < this.word.movie.length; i++) {

        if (this.word.movie[i] === " ") {
            blankArr.push(" // ");
            remaining--;

        } else {
            blankArr.push(" _ ");
        }
    }
    return word.movie;
    return blankArr;
    return remaining;
    console.log(word.movie);
    console.log(blankArr);
    console.log(remaining);
}
module.exports = Letter;
