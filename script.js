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
