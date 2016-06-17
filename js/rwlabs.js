$(document).ready(function() {
	// navigation click actions
	$('.app-logos img').on('click', function(event){
		event.preventDefault();
    console.log('this', this);
    $( '.app-logos img' ).removeClass('active');
    $( this ).addClass('active')
    var type = $( this ).attr('type');
    console.log('type', type);
    //$( '.rw-app-list-item' ).toggle();
    $( '.rw-app-list-item' ).addClass('hidden');
    $( '.app-images img' ).addClass('hidden');
    console.log('applistitem', $( '.rw-app-list-item' ));
    console.log('.type', $( '.' + type ));
    $( '.rw-app-list-item.' + type ).removeClass('hidden');
    $( '.app-images .' + type ).removeClass('hidden');
    console.log('applistitem', $( '.rw-app-list-item' ));


	});
});
