$(() => {

  console.log('Starting');
  // Click handler to expand and contract resume section
  $('#resume-header').click((event) => {
    if ($('.resume-container').is( ":hidden" )) {
      $('.resume-container').slideDown( "fast", () => {
        $('.resume-container').css('display', 'flex');
      } );
    } else {
      $('.resume-container').slideUp( "fast" );
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract resume section
  $('#portfolio-header').click((event) => {
    console.log('Clicked');
    if ($('.portfolio-container').is( ":hidden" )) {
      $('.portfolio-container').slideDown( "fast", () => {
        $('.portfolio-container').css('display', 'flex');
      } );
    } else {
      $('.portfolio-container').slideUp( "fast" );
    }
    event.stopImmediatePropagation();
  })

  $('.text').hover((event) => {
    $('.slide-details').animate({width: '160px'})
  }, (event) => {
    $('.slide-details').animate({width: '1px'})
  });


})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
