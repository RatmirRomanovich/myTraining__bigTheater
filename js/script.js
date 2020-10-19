"use strict";

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

const slider = document.querySelector('.swiper-container');
const sliderHome = document.querySelector('.swiper-containerHome');
let mySwiper = new Swiper(slider, {
  slidesPerView: 4,
  loop: true
});
let mySwiperHome = new Swiper(sliderHome, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.control__next',
    prevEl: '.control__prev'
  }
});