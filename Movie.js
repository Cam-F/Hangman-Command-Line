// Word Constructor
var Movie = function () {
    var movieArr = ["BRIGHT", "BLADE RUNNER", "STAR WARS", "DJANGO UNCHAINED", "AMERICAN PSYCHO", "THE WOLF OF WALL STREET", "THE DEPARTED"];
    var selectedMovie = movieArr[Math.floor(Math.random() * movieArr.length)];
    
    console.log(selectedMovie);
}
module.exports = Movie;