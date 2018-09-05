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
  $('#family-planner-slide').click((event) => {
    $('#modal-family-planner').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open Comic Stack Modal
  $('#comic-stack-slide').click((event) => {
    $('#modal-comic-stack').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open playlistr modal
  $('#playlistr-slide').click((event) => {
    $('#modal-playlistr').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open whats for dinner modal
  $('#whats-for-dinner-slide').click((event) => {
    $('#modal-whats-for-dinner').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open connect4 modal
  $('#connect4-slide').click((event) => {
    $('#modal-connect4').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open term tracker modal
  $('#term-tracker-slide').click((event) => {
    $('#modal-term-tracker').css('display', 'block');
    event.stopImmediatePropagation();
  })

  // Open scheduler modal
  $('#scheduler-slide').click((event) => {
    $('#modal-scheduler').css('display', 'block');
    event.stopImmediatePropagation();
  })

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
