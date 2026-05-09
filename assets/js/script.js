// Navbar Animation 
window.addEventListener('load', () => {
    document.querySelector('.header').classList.add('show');
  });

  // Letter Typing Animation
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

// Home Page Animation
  window.addEventListener('load', () => {
    document.querySelector('.hero-content').classList.add('show');
    document.querySelector('.hero-image-wrapper').classList.add('show');
  });