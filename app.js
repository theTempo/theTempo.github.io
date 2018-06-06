$('#banana').on('click', function() {
    const images = $('#apple').position().top;
  
    $('html, body').animate(
      {
      scrollTop: images
      }, 
    900)
  });