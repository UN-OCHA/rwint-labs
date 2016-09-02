$(document).ready(function() {

  var app_display = function(type) {

    if (!type) {
      return;
    }

    // Highlight selected logo.
    $( '.app-logos img' ).removeClass('active');
    $( 'img[type=' + type + ']' ).addClass('active')

    // Show only selected app description.
    $( '.rw-app-list-item' ).addClass('hidden');
    $( '.rw-app-list-item.' + type ).removeClass('hidden');

    // Show only selected screen slideshow.
    $( '.app-images .carousel' ).addClass('hidden');
    $( '.app-images .' + type ).removeClass('hidden');
  }

  // set initial app from fragment
  if (window.location.hash) {
    hash = window.location.hash.substring(1);
    app_display(hash);
  }

  // navigation clicks
  $('.app-logos img').on('click', function(event){
    event.preventDefault();
    var type = $( this ).attr('type');
    window.location.hash = type;
    app_display(type);
  });
});

