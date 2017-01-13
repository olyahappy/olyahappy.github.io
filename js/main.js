// Make it rain!
// $(function () {
// var current = 0,

// $imgs = jQuery('#show .abc');
// imgAmount = $imgs.length;

// $($imgs.css('position', 'absolute').hide().get(0)).show();


// window.setInterval(swapImages, 1000);

// function swapImages() {

//     var $currentImg = $('.abc:visible');

//     var $nextImg = $('.abc:hidden').eq(Math.floor(Math.random() * $('.abc:hidden').length));
//         speed = 500;
//     // animation speed should be the same for both images so we have a smooth change
//     $currentImg.fadeOut(speed);
//     $nextImg.fadeIn(speed);
// }
// });

$('.hamburger').on('click', function (event) {
	
	$("#dropdown").toggle();
});