
const navToggle = document.querySelector('.mobile-nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', function () {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navList.setAttribute('data-visible', !expanded);
  
  
  if (!expanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

document.addEventListener('DOMContentLoaded', function () {
const universitiesSection = document.querySelector('.universities');


const scrollSpeed = 4; 

function scrollUniversities() {
  universitiesSection.scrollLeft += scrollSpeed;
  
  
  if (universitiesSection.scrollLeft >= universitiesSection.scrollWidth - universitiesSection.offsetWidth) {
    const imgElements = universitiesSection.querySelectorAll('img');
    imgElements.forEach(img => {
      const cloneImg = img.cloneNode(true);
      universitiesSection.appendChild(cloneImg);
    });
  }
}

const scrollInterval = setInterval(scrollUniversities, 50); 


universitiesSection.addEventListener('mouseenter', function () {
  clearInterval(scrollInterval);
});


universitiesSection.addEventListener('mouseleave', function () {
  scrollInterval = setInterval(scrollUniversities, 50);
});
});

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
