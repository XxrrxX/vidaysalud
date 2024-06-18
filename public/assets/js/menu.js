const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnWha = document.querySelector(".btn-wsp");

navToggle.addEventListener("click", () => {

navMenu.classList.toggle("nav-menu_visible");
if (navMenu.classList.contains("nav-menu_visible")){
	navToggle.setAttribute("aria-label","cerrar menu");
	btnWha.classList.toggle("btn-wsp_hide")
	}else{
	navToggle.setAttribute("aria-label","abrir menu");
	btnWha.classList.toggle("btn-wsp_hide")
	}

});
