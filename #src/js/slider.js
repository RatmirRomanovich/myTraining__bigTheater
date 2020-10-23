const slider = document.querySelector('.swiper-container');
const sliderHome = document.querySelector('.swiper-containerHome');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		880: {
		  slidesPerView: 2,
		},
		// when window width is >= 480px
		1320: {
		  slidesPerView: 3,
		},
		// when window width is >= 640px
		1770: {
		  slidesPerView: 4,
		}
	 }
});

let mySwiperHome = new Swiper(sliderHome, {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.control__next',
		prevEl: '.control__prev',
		},
});