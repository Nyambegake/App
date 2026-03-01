// Academic Portfolio — minimal JS

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: highlight current section in nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNav);
setActiveNav();
