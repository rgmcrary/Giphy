// Button Array
var movieName = [
  "clueless",
  "mean girls",
  "heathers",
  "elf",
  "napoleon dynamite",
  "clue",
  "goonies",
  "hairspray",
  "pretty in pink",
  "best in show"
];

// Button Creation

var app = {
  createButton: function() {
    for (var i = 0; i < movieName.length; i++) {
      app.newButton(movieName[i]);
    }
  },

  addBtn: function() {
    var userInput = $("input").val().toLowerCase();
    movieName.push(userInput);
    app.newButton(userInput);
  },

  newButton: function(movieName) {
    $("#buttons").append(
      "<button type='button' class='btn btn-default' data-movie='" +
        movieName +
        "'>" +
        movieName +
        "</button>"
    );
  }

  // $("button").on("click", function () {
  //       var person = $(this).attr("data-movie");
  //       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  //         person + "&api_key=dc6zaTOxFJmzC&limit=10";

  //       $.ajax({
  //         url: queryURL,
  //         method: "GET"
  //       })
  //         .done(function (response) {
  //           var results = response.data;

  //           for (var i = 0; i < results.length; i++) {
  //             var gifDiv = $("<div class='item'>");

  //             var rating = results[i].rating;

  //             var p = $("<p>").text("Rating: " + rating);

  //             var personImage = $("<img>");
  //             personImage.attr("src", results[i].images.fixed_height.url);

  //             gifDiv.prepend(p);
  //             gifDiv.prepend(personImage);

  //             $("#gifs-appear-here").prepend(gifDiv);
};

$(document).ready(function() {
  app.createButton();

  $(".searchBtn").on("click", app.addBtn);
});
