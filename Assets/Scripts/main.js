$(document).ready(function() {
	if(localStorage.getItem('navigation') === null) {
		$.get('Assets/Templates/Navigation.html', function(data) {
			localStorage.setItem('navigation', data);
			loadNavigation();
		});
	}
	else loadNavigation();
});

function loadNavigation() {
	$('nav[role="navigation"]').html(localStorage.getItem('navigation'));
}