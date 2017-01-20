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
    event.preventDefault();

	$("#dropdown").toggle();
});

var counter = 0;
var numberImages = $('.slides img').length;
var imagePercent = 100 / numberImages;


$('.slides').css('width', (numberImages * 100) + '%');
$('.slides img').css('width', imagePercent + '%');


// Carousel timer
setInterval(function () {
    nextSlide();
}, 5000);


// Next button event
$('#next').on('click', function () {
   nextSlide();
});

function nextSlide () {
    if (counter === (numberImages - 1)) {
        counter = 0;
      $('.slides').css('transform','translateX(0)');
   }
   else {
       counter += 1;
       $('.slides').css('transform','translateX(-' + (counter * imagePercent) + '%)');
   }
}

$('#previous').on('click', function () {

    if (counter !== 0) {
        counter -= 1;
        $('.slides').css('transform','translateX(-' + (counter * imagePercent) + '%)');

    } else {
        counter = (numberImages - 1);
        $('.slides').css('transform','translateX(-' + (counter * imagePercent) + '%)');
    }


});


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('object1.jpg');
var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
if (window.addEventListener) {
  
    var keys = [123],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
   
    window.addEventListener("keydown", function(e){
       
        keys.push(e.keyCode);
        
       
        if (keys.toString().indexOf(konami) >= 0) {
       
            alert(' Anna Gusarova awesome artist');
            
            keys = [123];
        };
    }, true);
};
