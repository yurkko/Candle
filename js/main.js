'use strict';

// Const
const iconMenu = document.querySelector('.menu__icon');
const header = document.querySelector('.header');
const headerPhone = document.querySelector('.header__phone');
//
const initialBackgroundColor = '#fff8f3';
let lastScrollPosition = window.scrollY;
let isAtTop = true;

// Function
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    if (iconMenu.classList.contains('_active')) {
      headerPhone.classList.add('color__black');
    } else {
      headerPhone.classList.remove('color__black');
    }
  });
}
// Header Scroll
window.addEventListener('scroll', function () {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > 0) {
    isAtTop = false;
    header.classList.add('active--scroll');
    // header.style.backgroundColor = "#fff"; // Змінюємо фон при прокрутці вниз
  } else if (!isAtTop) {
    isAtTop = true;
    header.classList.remove('active--scroll');

    // header.style.backgroundColor = initialBackgroundColor; // Повертаємо початковий колір, коли докотилися до верху
  }
});

// Swipers
const feedbackSwiper = new Swiper('.feedback__swiper', {
  speed: 900,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    disableOnInteraction: true,
    clickable: true,
  },
});
const certificatesSwiper = new Swiper('.certificates__swiper', {
  loop: true,
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // Від 320px до 479px
    320: {
      slidesPerView: 1,
    },
    // Від 480px до 649px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Від 650px до 767px
    650: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});

// Получаєм наш слайдер
const certificateSwiperWrapper = document.querySelector(
  '.certificates__swiper',
);

// Подія при наведені на слайдер він зупиняється
certificateSwiperWrapper.addEventListener('mouseenter', () => {
  certificatesSwiper.autoplay.stop(); // Зупинити автопрокрутку при наведенні
});

// Подія коли курсор вийшов за межі слайдера продовжити прокрутку
certificateSwiperWrapper.addEventListener('mouseleave', () => {
  certificatesSwiper.autoplay.start(); // Перезапустити автопрокрутку при знятті наведення
});

// Accordeon

const accordeon = document.querySelector('.accordeon');
const accordeonBtns = document.querySelectorAll('.accordeon__question-btn');
const accordeonItem = document.querySelectorAll('.accordeon-item');

accordeonItem.forEach(item => {
  const btn = item.querySelector('.accordeon__question-btn');
  const text = item.querySelector('.accordeon__text');

  item.addEventListener('click', () => {
    btn.classList.toggle('accordeon__question--active');
    text.classList.toggle('accordeon__text--active');
    if (text.classList.contains('accordeon__text--active')) {
      text.style.maxHeight = text.scrollHeight + 'px';
    } else {
      text.style.maxHeight = null;
    }
  });
});
