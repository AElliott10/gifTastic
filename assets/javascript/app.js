/* Steps to set up a Gif API -Developers.giphy.com

1. get the key: UeWz8rShEHWfhx6NbamSEfp89pmQZ44r each key is unique per app;
2. Add Search code to your app / Implement Search - go to Search Endpoint sample code - javascript copy/paste code into JS;

//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");  - what is this? - an AJAX (Asynchronous JS + XML) what does an AJAX do? You send a piece of code asking for data from a certain site and pulling it in. 

xhr.done(function(data) { console.log("success got data", data); }); this is the promise means after you ask for the info - its the data / response you get back 

3.  We want to create a for loop to print each gif on the screen - need to find the image's url source to the find the original source need to look 3 levels down data to images to original to url*/

//copy past AJAX CALL from website

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UeWz8rShEHWfhx6NbamSEfp89pmQZ44r&limit=10");

xhr.done(function (data) {
  console.log("success got data", data);
  showGifs(data);
});
function showGifs(gifInfo){
  var giphs = gifInfo.data;
  console.log(giphs);
  for (i in giphs) {
    $('.container').append("<img src= ' " + giphs[i].images.original.url + " '/>")
  };
};



/* Initial array of tech terms
var movies = ["Variable", "Object", "Javascript", "Element"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayTechgiphy() {

  var tech = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + tech + "&apikey=trilogy";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Creating a div to hold the movie
    var movieDiv = $("<div class='movie'>");

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    movieDiv.append(pOne);

    // Storing the release year
    var released = response.Released;

    // Creating an element to hold the release year
    var pTwo = $("<p>").text("Released: " + released);

    // Displaying the release year
    movieDiv.append(pTwo);

    // Storing the plot
    var plot = response.Plot;

    // Creating an element to hold the plot
    var pThree = $("<p>").text("Plot: " + plot);

    // Appending the plot
    movieDiv.append(pThree);

    // Retrieving the URL for the image
    var imgURL = response.Poster;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    movieDiv.append(image);

    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
  });

}

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
*/