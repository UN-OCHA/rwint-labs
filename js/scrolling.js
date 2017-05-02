// Adapted from: https://stackoverflow.com/questions/14804941/how-to-add-smooth-scrolling-to-bootstraps-scroll-spy-function
$(document).ready(function() {
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var url = this.href;
    var hash = url.substring(url.indexOf('#'));
    var offset = $(hash).offset().top;
    $('html,body').animate({scrollTop:offset}, 750, function() {
      window.location.hash = hash;
    });
  });
});
