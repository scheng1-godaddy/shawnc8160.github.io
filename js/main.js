$(() => {

  // Click handler to expand and contract resume section
  $('#profile-header').click((event) => {
    if ($('#profile-title').is( ":hidden" )) {
      $('#profile-nav-title-overlay').css('width', '100%');
      $('#profile-description').slideDown( "fast" );
      $('#profile-title').css('display', 'block');
      $('#profile-nav-title').css('height', '100%')
      $('.portrait').css('height', '130px');
      $('.portrait').css('width', '110px');
      $('.about-contact-container').slideDown("fast");
      $('.section-header').css("padding", "2em");
      $('#profile-chevron').addClass('upside-down');
    } else {
      $('#profile-nav-title-overlay').css('width', '0');
      $('#profile-description').slideUp( "fast" );
      $('#profile-title').css('display', 'none');
      $('#profile-nav-title').css('height', '1px');
      $('.portrait').css('height', '90px');
      $('.portrait').css('width', '80px');
      $('.about-contact-container').slideUp( "fast" );
      $('.section-header').css("padding", "1em");
      $('#profile-chevron').removeClass('upside-down');
    }
    event.stopImmediatePropagation();
  })


  // Click handler to expand and contract resume section
  $('#resume-header').click((event) => {
    if ($('.resume-container').is( ":hidden" )) {
      $('.resume-container').slideDown( "fast", () => {
        $('.resume-container').css('display', 'flex');
        $('#resume-nav-title-overlay').css('width', '100%');
      } );
      $('#resume-chevron').addClass('upside-down');
    } else {
      $('.resume-container').slideUp( "fast" );
      $('#resume-nav-title-overlay').css('width', '0');
      $('#resume-chevron').removeClass('upside-down');
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract portfolio section
  $('#portfolio-header').click((event) => {
    console.log('Clicked');
    if ($('.portfolio-container').is( ":hidden" )) {
      $('.portfolio-container').slideDown( "fast", () => {
        $('#portfolio-nav-title-overlay').css('width', '100%');
      } );
      $('#portfolio-chevron').addClass('upside-down');
    } else {
      $('.portfolio-container').slideUp( "fast" );
      $('#portfolio-nav-title-overlay').css('width', '0');
      $('#portfolio-chevron').removeClass('upside-down');
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract portfolio section
  $('#contact-header').click((event) => {
    console.log('Clicked');
    if ($('.contact-container').is( ":hidden" )) {
      $('.contact-container').slideDown( "fast", () => {
        $('#contact-nav-title-overlay').css('width', '100%');
      } );
      $('#contact-chevron').addClass('upside-down');
    } else {
      $('.contact-container').slideUp( "fast" );
      $('#contact-nav-title-overlay').css('width', '0');
      $('#contact-chevron').removeClass('upside-down');
    }
    event.stopImmediatePropagation();
  })


  $('.text').hover((event) => {
    $('.slide-details').slideDown( "fast" )
  }, (event) => {
    $('.slide-details').slideUp( "fast" )
  });

  // Close modal
  $(window).click((event) => {
    if (event.target.classList && event.target.classList[0] == "modal") {
      $(".modal").css('display', 'none');
    }
    event.stopImmediatePropagation();
  })

  $(".close").click((event) => {
    console.log(event);
    $(".modal").css('display', 'none');
    event.stopImmediatePropagation();
  })

  // Open family planner Modal
  $('#family-planner-slide, #family-planner-overlay').click((event) => {
    $('#modal-family-planner').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open Comic Stack Modal
  $('#comic-stack-slide, #comic-stack-overlay').click((event) => {
    $('#modal-comic-stack').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open playlistr modal
  $('#playlistr-slide, #playlistr-overlay').click((event) => {
    $('#modal-playlistr').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open whats for dinner modal
  $('#whats-for-dinner-slide, #whats-dinner-overlay').click((event) => {
    $('#modal-whats-for-dinner').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open connect4 modal
  $('#connect4-slide, #connect4-overlay').click((event) => {
    $('#modal-connect4').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open term tracker modal
  $('#term-tracker-slide, #term-tracker-overlay').click((event) => {
    $('#modal-term-tracker').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open scheduler modal
  $('#scheduler-slide, #scheduler-overlay').click((event) => {
    $('#modal-scheduler').css('display', 'block');
    event.stopImmediatePropagation();
  })

})

const showGallery = () => {
  $('.portfolio-slide-container').css('display', 'none')
  $('.portfolio-gallery-container').css('display', 'flex');
  $('#gallery-link').addClass('icon-active');
  $('#slideshow-link').removeClass('icon-active');
}

const showSlideshow = () => {
  $('.portfolio-slide-container').css('display', 'block')
  $('.portfolio-gallery-container').css('display', 'none');
  $('#gallery-link').removeClass('icon-active');
  $('#slideshow-link').addClass('icon-active');
  let slideIndex = 1;
  showSlides(slideIndex);
}

const displayGalleryAll = () => {
  $('.web').css('display', 'block');
  $('.mobile').css('display', 'block');
  $('.desktop').css('display', 'block');
  $('.portfolio-gallery-link').removeClass('link-active');
  $('#all-link').addClass('link-active');
}

const displayGalleryWeb = () => {
  $('.web').css('display', 'block');
  $('.mobile').css('display', 'none');
  $('.desktop').css('display', 'none');
  $('.portfolio-gallery-link').removeClass('link-active');
  $('#web-link').addClass('link-active');
}

const displayGalleryMobile = () => {
  $('.web').css('display', 'none');
  $('.mobile').css('display', 'block');
  $('.desktop').css('display', 'none');
  $('.portfolio-gallery-link').removeClass('link-active');
  $('#mobile-link').addClass('link-active');
}

const displayGalleryDesktop = () => {
  $('.web').css('display', 'none');
  $('.mobile').css('display', 'none');
  $('.desktop').css('display', 'block');
  $('.portfolio-gallery-link').removeClass('link-active');
  $('#desktop-link').addClass('link-active');
}

// Next/previous controls
const plusSlides = n => {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = n => {
  showSlides(slideIndex = n);
}

const showSlides = n => {
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

let slideIndex = 1;
showSlides(slideIndex);
