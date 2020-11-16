//TASKS

// 1. Create search function using API to select city, country
// 2. Once selected, card will be populated with info on city, country
//     -Card has been made
//     -buttons have been made
//     -buttons need to launch modals
//     -must get info from API

// 3. Card will contain buttons that will launch modals which will bring up restaurants, hotels, weather info
// Ajax calls for the local weather and local restaurant info
function searchCity(city) {
  // var mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3OK-Ci22b2Pq7g3zj5oTYU0Vq9TF-Ork&callback=initMap"

  // $.ajax({
  //   url: mapURL,
  //   method: "GET",
  // }).then(function (responce) {
  //   console.log(responce);
  // });

  var forcastURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac";    

  $.ajax({
    url: forcastURL,
    method: "GET",
  }).then(function (responce) {
    console.log(responce);
    
    var cityName = $("<h2>").text(responce.name);
    var country = $("<p>").text(responce.sys.country);
    var temp = $("<p style = 'font-weight: bolder; font-size: xx-large'>").text("Temperature: " + responce.main.temp + "°F");
    var humid = $("<p>").text("Humidity: " + responce.main.humidity + "%");
    var wind = $("<p>").text("Wind Speed: " + responce.wind.speed + "MPH");

    $("#weather-content").empty();
    $("#weather-content").append(cityName, temp, humid, wind);

    $("#city-name").empty();
    $("#city-name").append(cityName, country);

    var restaurantURL =
      "https://developers.zomato.com/api/v2.1/search?lat=" +
      responce.coord.lat +
      "&lon=" +
      responce.coord.lon +
      "&count=10";
    $.ajax({
      url: restaurantURL,
      method: "GET",
      headers: { "user-key": "6501b9b92fa20ea792477268bd5cfd5a" },
    }).then(function (restaurantResponse) {
      console.log(restaurantResponse);

      var restaurantName = $("<h1 style='font-family:fantasy;font-size:xx-large;font-weight:bolder'>").text(restaurantResponse.restaurants[0].restaurant.name);
      var restaurantCost = $("<p>").text("Average cost for two people " + "$" + restaurantResponse.restaurants[0].restaurant.average_cost_for_two);
      var restaurantCuisines = $("<p>").text("Cuisine: " + restaurantResponse.restaurants[0].restaurant.cuisines);
      var restaurantAddress = $("<p>").text("Location: " + restaurantResponse.restaurants[0].restaurant.location.address);
      var restaurantRating = $("<p>").text("Rating: " + restaurantResponse.restaurants[0].restaurant.user_rating.rating_text);
      
      var restaurantName2 = $("<h1 style='font-family:fantasy;font-size:xx-large;font-weight:bolder'>").text(restaurantResponse.restaurants[1].restaurant.name);
      var restaurantCost2 = $("<p>").text("Average cost for two people " + "$" + restaurantResponse.restaurants[1].restaurant.average_cost_for_two);
      var restaurantCuisines2 = $("<p>").text("Cuisine: " + restaurantResponse.restaurants[1].restaurant.cuisines);
      var restaurantAddress2 = $("<p>").text("Location: " + restaurantResponse.restaurants[1].restaurant.location.address);
      var restaurantRating2 = $("<p>").text("Rating: " + restaurantResponse.restaurants[1].restaurant.user_rating.rating_text);
      
      var restaurantName3 = $("<h1 style='font-family:fantasy;font-size:xx-large;font-weight:bolder'>").text(restaurantResponse.restaurants[2].restaurant.name);
      var restaurantCost3 = $("<p>").text("Average cost for two people " + "$" + restaurantResponse.restaurants[2].restaurant.average_cost_for_two);
      var restaurantCuisines3 = $("<p>").text("Cuisine: " + restaurantResponse.restaurants[2].restaurant.cuisines);
      var restaurantAddress3 = $("<p>").text("Location: " + restaurantResponse.restaurants[2].restaurant.location.address);
      var restaurantRating3 = $("<p>").text("Rating: " + restaurantResponse.restaurants[2].restaurant.user_rating.rating_text);
      
      $("#food-content").empty();
      $("#food-content").append(restaurantName, restaurantCost, restaurantCuisines, restaurantAddress, restaurantRating, restaurantName2, restaurantCost2, restaurantCuisines2, restaurantAddress2, restaurantRating2, restaurantName3, restaurantCost3, restaurantCuisines3, restaurantAddress3, restaurantRating3);
    });

    var photoURL = "https://api.unsplash.com/search/photos/?&query=" + city + "&client_id=Ynq6VPbhTookVMwBwrFBeaNvv1He7lpwYKYdGmhnJ4U"

    $.ajax({
      url: photoURL,
      method: "GET",
    }).then(function (photoResponce) {
      console.log(photoResponce)

      // var photo1 = $("<img>").text("<img src=" + photoResponce.results[1].urls.small + ">")

      // $("#photo-content").empty();
      // $("#photo-content").append(photo1)

      $("#thumb-photo").empty();
      $("#thumb-photo").append("<img src=" + photoResponce.results[0].urls.small + ">");
    
      $("#photo-content").empty();
      $("#photo-content").append("<img src=" + photoResponce.results[1].urls.small + ">");
      
      $("#photo-content").append("<img src=" + photoResponce.results[2].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[3].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[4].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[5].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[6].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[7].urls.small + ">");

      $("#photo-content").append("<img src=" + photoResponce.results[8].urls.small + ">");
      
    });

    var hotelURL = "https://priceline-com.p.rapidapi.com/hotels/city/search/?&q=sacramento&rapidapi-key=ce5566d88amshbb3ba3a1f6af0e3p102bf6jsn254577bf996f"

    $.ajax({
      url: hotelURL,
      method: "GET",
    }).then(function (hotelResponce) {
      console.log(hotelResponce)
    })
  });
}

$("#search").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#searchInput").val();
  console.log(inputCity);
  searchCity(inputCity);
});


/*$(document).ready(function(){
  $("#food").click(function()
  {
    $("#restaurant").modal('show')
  });
});
*/
// 4. Use other APIs to populate info for each button.
//launches restaurant modal
document.querySelector("#food").addEventListener("click", function (event) {
  event.preventDefault();
  var modal = document.querySelector("#restaurant"); // assuming you have only 1
  var html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
    //OK button will close modal
    modal.querySelector('#ok').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
   }) 
});

//launches hotel modal
document.querySelector("#places").addEventListener("click", function (event) {
  event.preventDefault();
  var modal = document.querySelector("#hotels"); // assuming you have only 1
  var html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
    //OK button will close modal 
    modal.querySelector('#ok').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
   }) 
});

//launches weather modal
document.querySelector("#temp").addEventListener("click", function (event) {
  event.preventDefault();
  var modal = document.querySelector("#weather"); // assuming you have only 1
  var html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
    //OK button will close modal
    modal.querySelector('#ok').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
   }) 
  });

  //launches modal for places to see 
  document.querySelector('#sights').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('#see');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
    //OK button will close modal 
    modal.querySelector('#ok').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
   }) 
  });
  

// user enters a city name - then map is loaded on the screen of the destination, lets look into google API. try to have it auto fill Suggestions for the city.  goole map API key = AIzaSyC3OK-Ci22b2Pq7g3zj5oTYU0Vq9TF-Ork

// let map = google.maps.Map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// weather button - we will need to link the weather API to the button and grab the city name from the search info to display weather

// Restaurant button - we will need to link the Restaurant  API to the button and grab the city name from the search info to display Restaurant info

// hotel button - we will need to link the hotel  API to the button and grab the city name from the search info to display hotel info
