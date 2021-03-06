window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  console.log(scrollY);
}

function showNavOnScroll() {
  if (scrollY > 0) navigation.classList.add('scroll');
  else navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) backToTopButton.classList.add('show');
  else backToTopButton.classList.remove('show');
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 700
}).reveal(
  `#home, 
  #home img.woman, 
  #home .infos, 
  #services, 
  #services header, 
  #services .card,
  #testimonials,
  #testimonials header,
  #testimonials .card,
  #about,
  #about header,
  #about p,
  #about h3,
  #about .degree,
  #about img,
  #contact,
  #contact header,
  #contact .location,
  #contact a,
  #contact img
  `
);
