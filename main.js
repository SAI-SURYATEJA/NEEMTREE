
// const navToggle = document.querySelector('.mobile-nav-toggle');
// const navList = document.querySelector('.nav-list');

// navToggle.addEventListener('click', function () {
//   const expanded = navToggle.getAttribute('aria-expanded') === 'true';
//   navToggle.setAttribute('aria-expanded', !expanded);
//   navList.setAttribute('data-visible', !expanded);
  
  
//   if (!expanded) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
// const universitiesSection = document.querySelector('.universities');


// const scrollSpeed = 4; 

// function scrollUniversities() {
//   universitiesSection.scrollLeft += scrollSpeed;
  
  
//   if (universitiesSection.scrollLeft >= universitiesSection.scrollWidth - universitiesSection.offsetWidth) {
//     const imgElements = universitiesSection.querySelectorAll('img');
//     imgElements.forEach(img => {
//       const cloneImg = img.cloneNode(true);
//       universitiesSection.appendChild(cloneImg);
//     });
//   }
// }

// const scrollInterval = setInterval(scrollUniversities, 50); 


// universitiesSection.addEventListener('mouseenter', function () {
//   clearInterval(scrollInterval);
// });


// universitiesSection.addEventListener('mouseleave', function () {
//   scrollInterval = setInterval(scrollUniversities, 50);
// });
// });

// $(document).ready(function(){
// $(".front_arrow").click(function(){
//   $("#testimonial-carousel").carousel("next");
// });

// $(".back_arrow").click(function(){
//   $("#testimonial-carousel").carousel("prev");
// });

// var cardsInSlide = 3;
// var totalCards = $(".carousel-cards").length;

// $("#testimonial-carousel").on("slide.bs.carousel", function (event) {
//   var index = $(event.relatedTarget).index();
//   var visibleCards = cardsInSlide;

//   if (index + cardsInSlide > totalCards) {
//     visibleCards = totalCards - index;
//   }

//   $(".carousel-cards").removeClass("active");
//   $(".carousel-cards").slice(index, index + visibleCards).addClass("active");
// });
// });

// // function openPopup() {
// //   document.getElementById('form').style.display = 'flex';
// // }
// // function closePopup() {
// //   document.getElementById('form').style.display = 'none';
// // }

// document.addEventListener('DOMContentLoaded', function() {
//   var sets = document.querySelectorAll('.content-set');
//   var nextButton = document.getElementById('next');
//   var bookButton = document.getElementById('book');
//   var closeButton = document.querySelector('.close-btn');
//   var tickContainer = document.getElementById('tickContainer'); // Ensure this ID matches your tick container in HTML
//   var currentSet = 0;

//   function openPopup() {
//       document.getElementById('popupForm').style.display = 'block';
//       resetForm();
//   }

//   window.openPopup = openPopup; // Make it globally accessible if referenced by 'onclick' attributes

//   function closePopup() {
//       document.getElementById('popupForm').style.display = 'none';
//   }

//   function toggleContent() {
//       sets[currentSet].style.display = 'none';
//       currentSet++;
//       sets[currentSet].style.display = 'block';
      
//       if (currentSet === sets.length - 1) {
//           nextButton.style.display = 'none';
//           bookButton.style.display = 'block';
//       }
//   }

//   window.toggleContent = toggleContent;
//   function submitForm() {
//     // Hide form container
//     document.getElementById('formContainer').style.display = 'none';

//     // Show tick and hide popup after 2 seconds
//     tickContainer.style.display = 'flex';

//     setTimeout(function() {
//         tickContainer.style.display = 'none'; // Hide the tick container
//         resetForm();
//         closePopup(); // This should come last after the tick disappears
//     }, 2000);
// }

//   window.submitForm = submitForm;

//   function resetForm() {
//       document.getElementById('consultationForm').reset();
//       sets.forEach(function(set, index) {
//           set.style.display = index === 0 ? 'block' : 'none';
//       });
//       currentSet = 0;
      
//       // Reset buttons display
//       nextButton.style.display = 'block';
//       bookButton.style.display = 'none';
      
//       // Ensure the form container is displayed when resetting
//       document.getElementById('formContainer').style.display = 'block';
//   }

//   window.resetForm = resetForm;

//   closeButton.addEventListener('click', function() {
//       closePopup();
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
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

  // Carousel and scrolling functionality
  const universitiesSection = document.querySelector('.universities');
  const scrollSpeed = 4;

  function scrollUniversities() {
    if (universitiesSection) {
      universitiesSection.scrollLeft += scrollSpeed;

      if (universitiesSection.scrollLeft >= universitiesSection.scrollWidth - universitiesSection.offsetWidth) {
        const imgElements = universitiesSection.querySelectorAll('img');
        imgElements.forEach(img => {
          const cloneImg = img.cloneNode(true);
          universitiesSection.appendChild(cloneImg);
        });
      }
    }
  }

  let scrollInterval = setInterval(scrollUniversities, 50);

  if (universitiesSection) {
    universitiesSection.addEventListener('mouseenter', function () {
      clearInterval(scrollInterval);
    });

    universitiesSection.addEventListener('mouseleave', function () {
      scrollInterval = setInterval(scrollUniversities, 50);
    });
  }

  // jQuery dependent functionality
  $(".front_arrow").click(function () {
    $("#testimonial-carousel").carousel("next");
  });

  $(".back_arrow").click(function () {
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

  // Popup form functionality
  var sets = document.querySelectorAll('.content-set');
  var nextButton = document.getElementById('next');
  var bookButton = document.getElementById('book');
  var closeButton = document.querySelector('.close-btn');
  var tickContainer = document.getElementById('tickContainer');
  var currentSet = 0;

  // Functions
  function openPopup() {
    document.getElementById('popupForm').style.display = 'block';
    resetForm();
  }

  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }

  function toggleContent() {
    sets[currentSet].style.display = 'none';
    currentSet++;
    sets[currentSet].style.display = 'block';

    if (currentSet === sets.length - 1) {
      nextButton.style.display = 'none';
      bookButton.style.display = 'block';
    }
  }

  function submitForm() {
    document.getElementById('formContainer').style.display = 'none';
    tickContainer.style.display = 'flex';

    setTimeout(function () {
      tickContainer.style.display = 'none';
      closePopup();
      resetForm();
    }, 2000);
  }

  function resetForm() {
    document.getElementById('consultationForm').reset();
    sets.forEach(function (set, index) {
      set.style.display = index === 0 ? 'block' : 'none';
    });
    currentSet = 0;
    nextButton.style.display = 'block';
    bookButton.style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
  }

  // Event listeners
  closeButton.addEventListener('click', function () {
    closePopup();
  });

  // Make global functions accessible
  window.openPopup = openPopup;
  window.toggleContent = toggleContent;
  window.submitForm = submitForm;
  window.resetForm = resetForm;
});
const USAimage =  document.getElementById('USA');
