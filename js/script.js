$(function () {
	var $nav = $('#gnav');
	var gnavOffset = $nav.offset();
	var gnavHeight = $nav.innerHeight();
	$('.section').css('padding-top', gnavHeight / 2);

	$(window).on( 'resize', function() {
		var currentWidth = window.innerWidth;
		if (currentWidth == window.innerWidth) {
			return;
		}
		$nav = $('#gnav');
		gnavOffset = $nav.offset();
		gnavHeight = $nav.innerHeight();
		$('.section').css('padding-top', gnavHeight / 2);
	});

	$(window).scroll(function() {
		if ( $(window).scrollTop() >= gnavOffset.top ) {
			$nav.addClass( 'm_fixed' );
		} else {
			$nav.removeClass( 'm_fixed' );
		}
	});
});

