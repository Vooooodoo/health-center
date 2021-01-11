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

function openPopup(popup) {
  popup.classList.add('popup_slide-state_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_slide-state_opened');
}

function closeAllPopups(evt) {
  const isPopup = evt.target.classList.contains('popup');
  const isPopupClose = evt.target.classList.contains('popup__close');

  if (isPopup || isPopupClose) {
    closePopup(schedule2020Popup);
    closePopup(schedule2021Popup);
    closePopup(priceOnePopup);
    closePopup(priceTwoPopup);
  }
}

function switchSchedule2020Slide(evt) {
  const isPopupSliderBtn = evt.target.id === 'schedule-right-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'schedule-right-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePopup(schedule2020Popup);
    openPopup(schedule2021Popup);
  }
}

function switchSchedule2021Slide(evt) {
  const isPopupSliderBtn = evt.target.id === 'schedule-left-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'schedule-left-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePopup(schedule2021Popup);
    openPopup(schedule2020Popup);
  }
}

function switchPriceOneSlide(evt) {
  const isPopupSliderBtn = evt.target.id === 'price-right-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'price-right-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePopup(priceOnePopup);
    openPopup(priceTwoPopup);
  }
}

function switchPriceTwoSlide(evt) {
  const isPopupSliderBtn = evt.target.id === 'price-left-slider-btn';
  const isPopupRadioBtn = evt.target.id === 'price-left-radio-btn';

  if (isPopupSliderBtn || isPopupRadioBtn) {
    closePopup(priceTwoPopup);
    openPopup(priceOnePopup);
  }
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);

scheduleBtn.addEventListener('click', () => {
  openPopup(schedule2020Popup);
});
priceBtn.addEventListener('click', () => {
  openPopup(priceOnePopup);
});

document.addEventListener('click', switchSchedule2020Slide);
document.addEventListener('click', switchSchedule2021Slide);
document.addEventListener('click', switchPriceOneSlide);
document.addEventListener('click', switchPriceTwoSlide);
document.addEventListener('click', closeAllPopups);
