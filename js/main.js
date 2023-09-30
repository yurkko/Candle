const menuBtn = document.querySelector(".menu__btn"),
	menuMobile = document.querySelector(".header__menu-list"),
	body = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
	menuMobile.classList.toggle("menu-open");
});
