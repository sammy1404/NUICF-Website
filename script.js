// script.js

document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('active').checked = false;
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
  
    leftArrow.addEventListener("click", function() {
      gallery.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"
      });
    });
  
    rightArrow.addEventListener("click", function() {
      gallery.scrollBy({
        left: window.innerWidth,
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Add the class to trigger animation
        } else {
          entry.target.classList.remove('animated'); // Optional: Remove the class when out of view
        }
      });
    }, {
      threshold: 0.1 // Trigger animation when 50% of the element is visible
    });
  
    // Observe the .overlay-text4 element
    const target = document.querySelector('.overlay-text4');
    if (target) {
      observer.observe(target);
    }
  });
  
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const videoContainers = document.querySelectorAll('.videoContainer');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('showVC');
          }
      });
  });

  videoContainers.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", () => {
  const servicesHeader = document.querySelectorAll('.servicesHeader');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showSH');
        observer.unobserve(entry.target); // Stop observing once the class is added
      }
    });
  });

  servicesHeader.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const eventListContainer = document.querySelector('.eventListContainer');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Element is intersecting'); // Debugging line
        entry.target.classList.add('showEL');
      }
    });
  });

  observer.observe(eventListContainer);
});


document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  // Observe each element
  const elements = document.querySelectorAll("#About h1, #About .aboutDesc, #About a");
  elements.forEach(el => observer.observe(el));
});
