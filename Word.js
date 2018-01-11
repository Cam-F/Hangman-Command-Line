// Word Constructor
var Movie = function (word) {
    var movieArr = ["BRIGHT", "BLADE RUNNER", "STAR WARS", "DJANGO UNCHAINED", "AMERICAN PSYCHO", "THE WOLF OF WALL STREET", "THE DEPARTED"];
    var selectedMovie = movieArr[Math.floor(Math.random() * movieArr.length)];

    var movie = [];
    var remaining = selectedMovie.length;
    for (var i = 0; i < selectedMovie.length; i++){
        if (selectedMovie[i] === " "){
            movie.push(" // ");
            remaining--;
        } else {
            movie.push(" _ ");
        }
        movie.join(" ");
    }
    console.log(selectedMovie);
    console.log(movie);
    console.log(remaining);
}
module.exports = Movie;
Movie();