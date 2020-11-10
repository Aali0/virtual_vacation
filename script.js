//TASKS



// 1. Create search function using API to select city, country
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
    var temp = $("<p>").text("Temperature: " + responce.main.temp + "°F");
    var humid = $("<p>").text("Humidity: " + responce.main.humidity + "%");
    var wind = $("<p>").text("Wind Speed: " + responce.wind.speed + "MPH");

    $("#weather-content").empty();
    $("#weather-content").append(cityName, temp, humid, wind);

    $("#city-name").empty();
    $("#city-name").append(cityName, country)
});
}
 

$("#search").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#searchInput").val();
  console.log(inputCity);
  searchCity(inputCity);
});

// 2. Once selected, card will be populated with info on city, country
//     -Card has been made
//     -buttons have been made
//     -buttons need to launch modals
//     -must get info from API

// 3. Card will contain buttons that will launch modals which will bring up restaurants, hotels, flight info

// 4. Use other APIs to populate info for each button.



/*$(document).ready(function(){
    $("#food").click(function()
    {
        $("#restaurant").modal('show')
    });
});
*/
//launches restaurant modal
document.querySelector('#food').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('#restaurant');  // assuming you have only 1
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

 //launches hotel modal 
  document.querySelector('#places').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('#hotels');  // assuming you have only 1
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

  //launches weather modal 
  document.querySelector('#temp').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('#weather');  // assuming you have only 1
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

