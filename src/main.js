function onScroll() {
  if (scrollY > 0) navigation.classList.add('scroll');
  else navigation.classList.remove('scroll');
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
  #about,
  #about header,
  #about content,
  #contact,
  #contact header,
  #contact .content
  `
);
