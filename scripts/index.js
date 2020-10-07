// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');

// FUNCTIONS
function switchMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_opened');
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);
