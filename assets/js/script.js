
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "hero";
  sections.forEach(section => {

    const sectionTop = section.offsetTop - 300;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  // If no section found, default to hero
  if (!current && scrollY < 100) {
    current = "hero";
  }

  navLinks.forEach(link => {
    link.classList.remove("active");
     const linkTarget = link.getAttribute("href").substring(1);
     if (linkTarget === current) {
      link.classList.add("active");
    }
  });
});

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