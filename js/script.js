$('#main_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    smartSpeed:500,
})
$('#url_hash').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    center:true,
    dots:false,
    URLhashListener:true,
    startPosition: 'URLHash',
})

$('#url_hash_img').owlCarousel({
    loop:true,
    margin:50,
    items:1,
    center:true,
    dots:false,
    URLhashListener:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    animateOut: 'animate__zoomOut',
    animateIn: 'animate__zoomIn',
})

$('#url_hash_text').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    startPosition: 'URLHash',
    URLhashListener:true,
    smartSpeed:500,
})

$('#about').owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    dots:false,
    items:1,
    startPosition: 'URLHash',
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    URLhashListener:true,
    smartSpeed:500,
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
})

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.sticky').addClass('fixed');
    } else {
        $('.sticky').removeClass('fixed');
    }
});

// scroll to top js
var btn = $('.to_top');
btn.hide();
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



$(document).ready(function () {

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
    wow.init();
    new WOW().init();
    
});