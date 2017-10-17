$(document).ready(function() {
	
});

/*lazyload scrollTop*/
$(function() {
	$('img.lazyload').lazyload({
		//載入的圖片用淡入的效果載入
		effect:'fadeIn', placeholder: 'images/loading.gif'
	});
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