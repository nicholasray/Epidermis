var hamburger = document.querySelector( '.hamburger' ),
	pageContainer = document.querySelector( '.page-container' );

hamburger.addEventListener( 'click', function () {
	pageContainer.classList.toggle( 'hamburger--open' );
} );
