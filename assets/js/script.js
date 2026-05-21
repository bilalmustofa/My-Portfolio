// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // If no section found, default to hero
  if (window.scrollY < 100) {
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

// Navbar and Home Page Animation
window.addEventListener('load', () => {
    // hide preloader
      document.getElementById('preloader').classList.add("hide");
      // start  animation
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 1000);
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

 // Pre-loader Animation
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000); 
  });