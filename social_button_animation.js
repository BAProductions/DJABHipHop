$(function() {
	console.log( "ready!" );
	var socialButton = $("#fa-icons .fa");
	var mouse = $("#mouse");
	var duration = 200;
	$(socialButton).hover(function () {
		console.log( "Mouse Enter!" + this);
		$(this).animate({
			'top': "10px",
			'opacity': "100%",
			'top': "0px"
		}, duration);
		$(this).animate({
			'opacity': "100%"
		}, duration);
		
	}, function () {
		console.log( "Mouse Leave!" + this);
		$(this).animate({
			'top': "0px",
			'opacity': "75%",
			'top': "10px"
		}, duration);
		
		$(this).animate({
			'opacity': "75%"
		}, duration);
	});
});