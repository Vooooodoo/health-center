// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');
const scheduleBtn = document.querySelector('#schedule-btn');
const priceBtn = document.querySelector('#price-btn');
const schedule2020Popup = document.querySelector('#schedule2020-popup');
const schedule2021Popup = document.querySelector('#schedule2021-popup');

// FUNCTIONS
function switchMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_opened');
}

function openSchedule2020Popup() {
  schedule2020Popup.classList.add('popup_opened');
}

function closeSchedule2020Popup() {
  schedule2020Popup.classList.remove('popup_opened');
}

function openSchedule2021Popup() {
  schedule2021Popup.classList.add('popup_opened');
}

function closeSchedule2021Popup() {
  schedule2021Popup.classList.remove('popup_opened');
}

function closeAllPopups(evt) {
  const isPopup = evt.target.classList.contains('popup');
  const isPopupClose = evt.target.classList.contains('popup__close');

  if (isPopup || isPopupClose) {
    closeSchedule2020Popup();
    closeSchedule2021Popup();
  }
}

function switchSchedule2020Slide(evt) {
  const isPopupSliderBtn = evt.target.classList.contains('popup__slider-btn_right');
  const isPopupRadioBtn = evt.target.id === 'right-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closeSchedule2020Popup();
    openSchedule2021Popup();
  }
}

function switchSchedule2021Slide(evt) {
  const isPopupSliderBtn = evt.target.classList.contains('popup__slider-btn_left');
  const isPopupRadioBtn = evt.target.id === 'left-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closeSchedule2021Popup();
    openSchedule2020Popup();
  }
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);

scheduleBtn.addEventListener('click', openSchedule2020Popup);
document.addEventListener('click', switchSchedule2020Slide);
document.addEventListener('click', switchSchedule2021Slide);
document.addEventListener('click', closeAllPopups);
