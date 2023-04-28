import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

const slider = new Swiper('.swiper', {
  loop: true,
  slideClass: 'person-card',
  navigation: {
    nextEl: '.coaches__slider-button--next',
    prevEl: '.coaches__slider-button--prev',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 4,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
