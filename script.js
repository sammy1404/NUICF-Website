// hamburger menu
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('active').checked = false;
    });
});


// gallery button functionality
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


// gallery picture 1 overlay animation  
document.addEventListener("DOMContentLoaded", function() {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');  
      } else {
        entry.target.classList.remove('animated'); 
      }
    });
  }, {
    threshold: 0.8 
  });

  // Observe the .overlay-text4 element
  const target = document.querySelector('.overlay-text4');
  if (target) {
    observer.observe(target);
  }
});


// about page appear animation
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

  
// video container animation
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


// services h1 tag in from left animation
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


// events card animation 
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
