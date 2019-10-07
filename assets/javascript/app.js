/* Steps to set up a Gif API -Developers.giphy.com

1. get the key: UeWz8rShEHWfhx6NbamSEfp89pmQZ44r each key is unique per app;
2. Add Search code to your app / Implement Search - go to Search Endpoint sample code - javascript copy/paste code into JS;

//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");  - what is this? - an AJAX (Asynchronous JS + XML) what does an AJAX do? You send a piece of code asking for data from a certain site and pulling it in. 

xhr.done(function(data) { console.log("success got data", data); }); this is the promise means after you ask for the info - its the data / response you get back 

3.  We want to create a for loop to print each gif on the screen - need to find the image's url source to the find the original source need to look 3 levels down data to images to original to url*/

//copy past AJAX CALL from website

/*var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UeWz8rShEHWfhx6NbamSEfp89pmQZ44r&limit=10");

xhr.done(function (data) {
  console.log("success got data", data);
  showGifs(data);
});

//shows giphs
function showGifs(gifInfo){
  var giphs = gifInfo.data;
  console.log(giphs);
  for (i in giphs) {
    $('.container').append("<img src= ' " + giphs[i].images.original.url + " '/>")
  };
};
*/



// displayAnimal function re-renders the HTML to display the appropriate content
function displayAnimal() {

  //Ajax call
  var animal = $(this).attr("data-name");
  
  var queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=UeWz8rShEHWfhx6NbamSEfp89pmQZ44r&limit=10");

 
  queryURL.done(function (data) {
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

    // Creating a div to hold the animal
    var animalDiv = $("<div class='animal'>");

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    animalDiv.append(pOne);

        // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    movieDiv.append(image);

    // Putting the entire animal giph above the previous giph
    $("#animal-view").prepend(animalDiv);
  };

// Function for displaying animals
function renderButtons() {

  // Deleting the animals prior to adding new animals
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Initial array of movies
var animal = ["Dog", "Hedgehog", "Cat", "Peacock"];

  // Looping through the array of movies
  for (var i = 0; i < animal.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of animal-btn to our button
    a.addClass("animal-btn");
    // Adding a data-attribute
    a.attr("data-name", animal[i]);
    // Providing the initial button text
    a.text(animal[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a animal button is clicked
$("#add-animal").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var animal = $("#animal-input").val().trim();

  // Adding animal from the textbox to our array
  animal.push(animal);

  // Calling renderButtons which handles the processing of our animal array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".animal-btn", displayAnimal);

// Calling the renderButtons function to display the intial buttons
renderButtons();
