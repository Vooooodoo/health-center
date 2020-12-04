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

function closeSchedulePopup(evt) {
  const isPopup = evt.target.classList.contains('popup');
  const isPopupClose = evt.target.classList.contains('popup__close');

  if (isPopup || isPopupClose) {
    schedule2020Popup.classList.remove('popup_opened');
    schedule2021Popup.classList.remove('popup_opened');
  }
}

function closeSchedule2020Popup(evt) {
  const isPopupSliderBtn = evt.target.classList.contains('popup__slider-btn_right');

  if (isPopupSliderBtn) {
    schedule2020Popup.classList.remove('popup_opened');
    schedule2021Popup.classList.add('popup_opened');
  }
}

function closeSchedule2021Popup(evt) {
  const isPopupSliderBtn = evt.target.classList.contains('popup__slider-btn_left');

  if (isPopupSliderBtn) {
    schedule2021Popup.classList.remove('popup_opened');
    schedule2020Popup.classList.add('popup_opened');
  }
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);

scheduleBtn.addEventListener('click', openSchedule2020Popup);
document.addEventListener('click', closeSchedule2020Popup);
document.addEventListener('click', closeSchedule2021Popup);
document.addEventListener('click', closeSchedulePopup);
