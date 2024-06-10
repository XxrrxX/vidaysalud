const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")){
	navToggle.setAttribute("aria-label","cerrar menu");
	}else{
	navToggle.setAttribute("ara-label","abrir menu");
	}

});

