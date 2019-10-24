/* Steps to set up a Gif API -Developers.giphy.com
1. click on create an app to get the key: UeWz8rShEHWfhx6NbamSEfp89pmQZ44r each key is unique per app;

2. Add Search code to your app / Implement Search - go to Search Endpoint sample code - javascript copy/paste code into JS;
//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");  - what is this? - an AJAX (Asynchronous JS + XML) what does an AJAX do? You send a piece of code asking for data from a certain site and pulling it in. 
xhr.done(function(data) { console.log("success got data", data); }); this is the promise means after you ask for the info - its the data / response you get back 

3.  IMAGE - We want to create a for loop to print each gif on the screen 
Initial render: STILL IMAGE - needed on initial load path without motion url path: images.orginal_still.url

Clickable motion: ORIGINAL IMAGE needed the original source need to look 3 levels down data to images to original to url path: images.orginial.url*/

/*---------------------------------------------------------------------------------

COULD NOT FIGURE OUT 
A. How to get the right Gif to display in motion mode. defaulting to the first  gif in the array 0 is in the []; if I leave an empty array all the render buttons disappear.

B. Don't know how to get it to stop the motion once started.

-----------------------------------------------------------------------*/



// displayAnimal function re-renders the HTML to display the appropriate content initially as a still. User can click on the giphy to animate

function displayAnimal() {

  //Ajax call
  var animal = $(this).attr("data-name");

  var queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=UeWz8rShEHWfhx6NbamSEfp89pmQZ44r&limit=10&rating");


  queryURL.done(function (data) {
    console.log("success got data", data);
    showGifs(data);

    //dynamically created the class animalMovement on click would carry out the if/else statement. if the state is still
    $(".animalMovement").on("click", function(){
      let state = $(this).attr("data-state");
      if (state === "still"){
        $(this).attr("src", data.data[0].images.original.url);
        $(this).attr("data-state", "animate");
      } else { 
        $(this).attr("src", data.data[0].images.original_still.url);
        $(this).attr("data-state", "still");
      }
     
     console.log("I clicked image");
    
   })
  });

  function showGifs(gifInfo) {
    var giphs = gifInfo.data;
    console.log(giphs);

    $('#animal-view').empty();//this unction empties out the previous content and renders the new content

    for (i in giphs) {
      
      let animated =  gifInfo.data[i].images.original.url
      let still = gifInfo.data[i].images.original_still.url
    $('#animal-view').append("<p> Rating: " + giphs[i].rating + "</p>") 
      $('#animal-view').append("<img class= 'animalMovement' data-state='still' data-animate='test' data-still='test' src= ' " + giphs[i].images.original_still.url + " '/>")
      

      $(".animalMovement").attr("data-animate", animated);
      $(".animalMovement").attr("data-still", still);
      };

   
  };
};



// Initial ARRAY of animals
var animals = ["Raccoon", "Hedgehog", "Cat", "Peacock"];

// Function for displaying buttons for each array element

function renderButtons() {

  // Deleting the animals prior to adding new animals
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
 

  // Looping through the array of movies
  for (var i = 0; i < animals.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of animal-btn to our button
    a.addClass("animal-btn");
    // Adding a data-attribute
    a.attr("data-name", animals[i]);
    // Providing the initial button text
    a.text(animals[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);

  }

};
  // Adding a click event listener to all elements with a class of "animal-btn"
  $(document).on("click", ".animal-btn", displayAnimal);

// Calling the renderButtons function to display the intial buttons
renderButtons();

//make the search feature work
$('#submit-button').on('click', function(event) {
  event.preventDefault();

  var value = $('#search').val();
  console.log('Value: ', value);//allow you to see if the search bar is connected to the search button
 
 animals.push(value);
//alert (animals);check to see if values are pushing into the array

  renderButtons();
  $("#search").val(" ");
});
