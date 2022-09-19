const hamburger = document.querySelector('#header__main-nav');
const menuHamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

menuHamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('clicked');
  links.forEach((link) =>{
    link.classList.toggle('fading');
  });
})
