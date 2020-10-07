// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');

// FUNCTIONS
function toggleMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_opened');
}

// LISTENERS
mobileMenuButton.addEventListener('click', toggleMobileMenu);