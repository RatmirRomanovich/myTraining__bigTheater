//*(start)_ реализация ВЫПАДАЮЩЕГО МЕНЮ.
let user_icon = document.querySelector('.icon-menu');
user_icon.addEventListener('click', function (e) {
	let user_menu = document.querySelector('.menu__body');
	user_menu.classList.toggle('_active');
	user_icon.classList.toggle('_active');
});
//*(end)

//*(start)_ скрытие ВЫПАДАЮЩЕГО МЕНЮ при клике на любую область вне его.
document.addEventListener('click', function (e) {
	if (!e.target.closest('.header')) {
		let user_menu = document.querySelector('.menu__body');
		let user_icon = document.querySelector('.icon-menu');
		user_menu.classList.remove('_active');
		user_icon.classList.remove('_active');
	}
});

document.addEventListener('click', function (e) {
	if (e.target.closest('.menu__close')) {
		let user_menu = document.querySelector('.menu__body');
		let user_icon = document.querySelector('.icon-menu');
		user_menu.classList.remove('_active');
		user_icon.classList.remove('_active');
	}
});
//*(end)