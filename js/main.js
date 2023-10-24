// const menuBtn = document.querySelector(".menu__btn"),
// 	menuMobile = document.querySelector(".header__menu-list"),
// 	body = document.querySelector("body");

// menuBtn.addEventListener("click", (e) => {
// 	menuMobile.classList.toggle("menu-open");
// });

"use strict";

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}
