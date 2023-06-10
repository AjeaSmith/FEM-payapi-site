let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
	console.log(menu.style.display);
	if (menu.style.display === "flex") {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}
});
