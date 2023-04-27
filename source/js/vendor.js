import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

const slider = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 4,
  spaceBetween: 40,
});
