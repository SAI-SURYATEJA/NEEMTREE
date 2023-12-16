$(document).ready(function(){
    $(".front_arrow").click(function(){
      $("#testimonial-carousel").carousel("next");
    });
  
    $(".back_arrow").click(function(){
      $("#testimonial-carousel").carousel("prev");
    });
  
    var cardsInSlide = 3;
    var totalCards = $(".carousel-cards").length;
  
    $("#testimonial-carousel").on("slide.bs.carousel", function (event) {
      var index = $(event.relatedTarget).index();
      var visibleCards = cardsInSlide;
  
      if (index + cardsInSlide > totalCards) {
        visibleCards = totalCards - index;
      }
  
      $(".carousel-cards").removeClass("active");
      $(".carousel-cards").slice(index, index + visibleCards).addClass("active");
    });
});
