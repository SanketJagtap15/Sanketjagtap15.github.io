$(document).ready(function () {
  // Hamburger Menu Functionality
  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  // Image Slider Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Cycle back to the first slide
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slides").style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Change slides every 3 seconds
  setInterval(showNextSlide, 3000);
});