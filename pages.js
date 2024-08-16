document.addEventListener("DOMContentLoaded", () => {
  const sentinel = document.getElementById('sentinel');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              document.body.classList.add('showBody');
              observer.disconnect(); // Stop observing once the class is added
          }
      });
  });

  observer.observe(sentinel);
});
