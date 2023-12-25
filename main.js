
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

  document.addEventListener('DOMContentLoaded', function () {
    const timelineOl = document.querySelector('.timeline ol');
    
    const clonedTimelineContent = timelineOl.cloneNode(true);
    timelineOl.appendChild(clonedTimelineContent);

    const timelineItemWidth = timelineOl.querySelector('li').offsetWidth;

    
    const animationDuration = timelineItemWidth / 100 * 5; // 

    timelineOl.style.animation = `scrollTimeline ${animationDuration}s linear infinite`;

    timelineOl.style.width = `${timelineItemWidth * 2}px`;
  });
  //numbers animation
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Ensure the final value is exactly as targeted
        obj.innerHTML = end;
      }
    };
    window.requestAnimationFrame(step);
  }

  // Intersection Observer callback
  function onSectionEnter(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations if the section is intersecting
        const enrolledStudentsElement = entry.target.querySelector('.enrolled-students');
        animateValue(enrolledStudentsElement, 100, 2500, 2000);

        const affiliatedUniversitiesElement = entry.target.querySelector('.affiliated-universities');
        animateValue(affiliatedUniversitiesElement, 20, 200, 2500);

        const coursesElement = entry.target.querySelector('.courses');
        animateValue(coursesElement, 100, 700, 3000);

        const experienceElement = entry.target.querySelector('.experience');
        animateValue(experienceElement, 2, 15, 2000);

        // Stop observing the section after animation starts
        observer.unobserve(entry.target);
      }
    });
  }

  // Create and configure an intersection observer instance
  const observer = new IntersectionObserver(onSectionEnter, {
    root: null, // relative to the viewport
    threshold: 0.4 // trigger when 10% of the target is visible
  });

  // Start observing the section that contains the numbers
  const countingSection = document.querySelector('.container7');
  if (countingSection) {
    observer.observe(countingSection);
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

//for sent button
const form = document.getElementById('contactForm');
  const sendButton = document.getElementById('SENDD');
  
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Add the 'send-button-sent' class
      sendButton.classList.add('send-button-sent');
      
      // Add the tick SVG and the text "Sent!" inside the button
      sendButton.innerHTML = `Sent! <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.355 9.03906L9.33628 14.781L6.33203 11.91" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.8433 21.3433C16.2795 21.3433 20.6865 16.9363 20.6865 11.5C20.6865 6.06372 16.2795 1.65674 10.8433 1.65674C5.40698 1.65674 1 6.06372 1 11.5C1 16.9363 5.40698 21.3433 10.8433 21.3433Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      
      // Handle form data...

      form.reset();

      setTimeout(function () {
        // Remove the 'send-button-sent' class
        sendButton.classList.remove('send-button-sent');

        // Revert back to the original button text without SVG
        sendButton.innerHTML = '<p>Send Message</p>';
      }, 3000);
    });
  } else {
    console.error('Form element not found!');
  }



//testimonial carousel
const testimonials = [
  {
      content: "I owe a big thanks to Neem Tree for their incredible IELTS supportI owe a big thanks to Neem Tree for their incredible IELTS supportI owe a big thanks to Neem Tree for their incredible IELTS supportI owe a big thanks to Neem Tree for their incredible IELTS support",
      name: "Kathleen Smith",
      role: "Web Designer"
  },
  {
      content: "The study resources provided were top-notch and tailored to my weak areas...",
      name: "John Doe",
      role: "Software Engineer"
  },
  {
      content: "Neem Tree's approach to IELTS preparation was exactly what I needed...",
      name: "Emily Johnson",
      role: "Graduate Student"
  },
  // ... add additional testimonials as necessary
];

let currentIndex = 0;

// Function to update the testimonial content and person info
function updateTestimonial(index) {
  document.getElementById('testimonial-content').textContent = testimonials[index].content;
  document.getElementById('person-name').textContent = testimonials[index].name;
  document.getElementById('person-role').textContent = testimonials[index].role;
}

// Event listeners for the buttons
document.getElementById('prev-btn').addEventListener('click', function() {
  if (currentIndex > 0) {
      currentIndex--;
  } else {
      currentIndex = testimonials.length - 1;
  }
  updateTestimonial(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', function() {
  if (currentIndex < testimonials.length - 1) {
      currentIndex++;
  } else {
      currentIndex = 0;
  }
  updateTestimonial(currentIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentIndex);


