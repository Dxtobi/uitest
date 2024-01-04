

$(document).ready(function () {
    var leftColumn = $(".left");
    var imageTextElements = $(".image-text");
   
    
   
    $("#down").click(function () {
      var currentSection = $(".sub-section.active-section");
      // If there is a next section, move to it
      var nextSection = currentSection.next(".sub-section");
      if (nextSection.length > 0) {
        currentSection.removeClass("active-section animated slideInDown slideInUp");
        nextSection.addClass("active-section animated slideInDown ");
      }
    });


    $("#up").click(function () {
      // Find the current active-section section
      var currentSection = $(".sub-section.active-section");

      // If there is a next section, move to it
      var nextSection = currentSection.prev(".sub-section");
      if (nextSection.length > 0) {
        currentSection.removeClass("active-section animated slideInDown slideInUp");
        nextSection.addClass("active-section animated slideInUp ");
      }
    });






  /******* THIS IS FOR THE DOUBLE SCROLL SECTION***/

    $('#sm-down').click(function () {
      var currentScrollLeft = $('.left-content.corrent-left')
      var currentScrollRight = $('.image-text.corrent-right')
 
      // Iterate over each .image-text element
      var nextSectionLeft = currentScrollLeft.next(".left-content");
      var nextSectionRight = currentScrollRight.next(".image-text");
      if (nextSectionLeft.length > 0) {
      
        currentScrollLeft.removeClass("corrent-left animated slideInDown  slideInUp");
        nextSectionLeft.addClass("corrent-left animated slideInDown ");

        currentScrollRight.removeClass("corrent-right animated slideInDown  slideInUp");
        nextSectionRight.addClass("corrent-right animated slideInUp ");
      }
    });

    $('#sm-up').click(function () {
      var currentScrollLeft = $('.left-content.corrent-left')
      var currentScrollRight = $('.image-text.corrent-right')
 
      
      // Iterate over each .image-text element
      var nextSectionLeft = currentScrollLeft.prev(".left-content");
      var nextSectionRight = currentScrollRight.prev(".image-text");
      if (nextSectionLeft.length > 0) {
        
        currentScrollLeft.removeClass("corrent-left animated slideInDown slideInUp");
        nextSectionLeft.addClass("corrent-left animated slideInUp ");

        currentScrollRight.removeClass("corrent-right animated slideInDown  slideInUp");
        nextSectionRight.addClass("corrent-right animated slideInDown ");
      }
    });

  });