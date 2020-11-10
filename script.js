//TASKS

/*

1. Create search function using API to select city, country

2. Once selected, card will be populated with info on city, country
    -Card has been made
    -buttons have been made
    -buttons need to launch modals
    -must get info from API

3. Card will contain buttons that will launch modals which will bring up restaurants, hotels, flight info

4. Use other APIs to populate info for each button.

*/

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
  });

//close button will close modal  
document.querySelector('.delete').addEventListener("click", function(){
    var close = document.querySelector(".modal")
    close.close();
})