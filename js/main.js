$(() => {

  console.log('Starting');
  // Click handler to expand and contract resume section
  $('#resume-header').click((event) => {
    if ($('.resume-container').is( ":hidden" )) {
      $('.resume-container').slideDown( "slow" );
      $('.resume-container').css('display', 'flex');
    } else {
      $('.resume-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })

  // Click handler to expand and contract resume section
  $('#portfolio-header').click((event) => {
    console.log('Clicked');
    if ($('.portfolio-container').is( ":hidden" )) {
      $('.portfolio-container').slideDown( "slow" );
    } else {
      $('.portfolio-container').slideUp( "slow" );
    }
    event.stopImmediatePropagation();
  })

})

// $('.resume-container').css('display', 'none');
