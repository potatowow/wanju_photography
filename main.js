$(document).ready(function() {
	
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
/*navbar選單動畫*/
$(function() {
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});
});