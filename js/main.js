"use strict";

// Зміні
const iconMenu = document.querySelector(".menu__icon");
const header = document.querySelector(".header");
const headerPhone = document.querySelector(".header__phone");

// Функціонал
window.addEventListener("DOMContentLoaded", () => {
	if (iconMenu) {
		const menuBody = document.querySelector(".menu__body");
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle("_lock");
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			if (iconMenu.classList.contains("_active")) {
				headerPhone.classList.add("color__black");
			} else {
				headerPhone.classList.remove("color__black");
			}
		});
	}

	const initialBackgroundColor = "#fff8f3";
	let lastScrollPosition = window.scrollY;
	let isAtTop = true;

	window.addEventListener("scroll", function () {
		const currentScrollPosition = window.scrollY;

		if (currentScrollPosition > 0) {
			isAtTop = false;
			header.classList.add("active--scroll");
			// header.style.backgroundColor = "#fff"; // Змінюємо фон при прокрутці вниз
		} else if (!isAtTop) {
			isAtTop = true;
			header.classList.remove("active--scroll");

			// header.style.backgroundColor = initialBackgroundColor; // Повертаємо початковий колір, коли докотилися до верху
		}
	});
});
