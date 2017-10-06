$(document).ready(function() {
	$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	});
});

/*scrollTop*/
$(function() {
	$('#gotop').click(function(){
		$('html, body').animate({
			scrollTop:0
		},1000);
		return false;
	});
});