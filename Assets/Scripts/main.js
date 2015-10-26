$(document).ready(function() {
	$.get('Assets/Templates/Navigation.html', function(data) {
		localStorage.setItem('navigation', data);
		loadNavigation();
	});
});

function loadNavigation() {
	$('nav[role="navigation"]').html(localStorage.getItem('navigation'));
}