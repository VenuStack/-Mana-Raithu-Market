document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('nav-open');
    navToggle.classList.toggle('toggle-open');
  });

  document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove('nav-open');
      navToggle.classList.remove('toggle-open');
    }
  });
});
