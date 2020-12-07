// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');
const scheduleBtn = document.querySelector('#schedule-btn');
const priceBtn = document.querySelector('#price-btn');
const schedule2020Popup = document.querySelector('#schedule2020-popup');
const schedule2021Popup = document.querySelector('#schedule2021-popup');
const priceOnePopup = document.querySelector('#price-one-popup');
const priceTwoPopup = document.querySelector('#price-two-popup');

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

function openPriceOnePopup() {
  priceOnePopup.classList.add('popup_opened');
}

function closePriceOnePopup() {
  priceOnePopup.classList.remove('popup_opened');
}

function openPriceTwoPopup() {
  priceTwoPopup.classList.add('popup_opened');
}

function closePriceTwoPopup() {
  priceTwoPopup.classList.remove('popup_opened');
}

function closeAllPopups(evt) {
  const isPopup = evt.target.classList.contains('popup');
  const isPopupClose = evt.target.classList.contains('popup__close');

  if (isPopup || isPopupClose) {
    closeSchedule2020Popup();
    closeSchedule2021Popup();
    closePriceOnePopup();
    closePriceTwoPopup();
  }
}

function switchSchedule2020Slide(evt) {
  const isPopupSliderBtn = evt.target.id === 'schedule-right-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'schedule-right-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closeSchedule2020Popup();
    openSchedule2021Popup();
  }
}

function switchSchedule2021Slide(evt) {
  const isPopupSliderBtn = evt.target.id === 'schedule-left-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'schedule-left-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closeSchedule2021Popup();
    openSchedule2020Popup();
  }
}

function switchPriceOneSlide(evt) {
  const isPopupSliderBtn = evt.target.id === 'price-right-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'price-right-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePriceOnePopup();
    openPriceTwoPopup();
  }
}

function switchPriceTwoSlide(evt) {
  const isPopupSliderBtn = evt.target.id === 'price-left-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'price-left-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePriceTwoPopup();
    openPriceOnePopup();
  }
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);

scheduleBtn.addEventListener('click', openSchedule2020Popup);
priceBtn.addEventListener('click', openPriceOnePopup);
document.addEventListener('click', switchSchedule2020Slide);
document.addEventListener('click', switchSchedule2021Slide);
document.addEventListener('click', switchPriceOneSlide);
document.addEventListener('click', switchPriceTwoSlide);
document.addEventListener('click', closeAllPopups);
