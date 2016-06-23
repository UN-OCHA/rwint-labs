$(document).ready(function() {
	// navigation click actions
	$('.app-logos img').on('click', function(event){
		event.preventDefault();
    var type = $( this ).attr('type');

    // Highlight selected logo.
    $( '.app-logos img' ).removeClass('active');
    $( this ).addClass('active')

    // Show only selected app description.
    $( '.rw-app-list-item' ).addClass('hidden');
    $( '.rw-app-list-item.' + type ).removeClass('hidden');

    // Show only selected screen slideshow.
    $( '.app-images .carousel' ).addClass('hidden');
    $( '.app-images .' + type ).removeClass('hidden');
	});
});
