const button = document.getElementById("menu-trigger");
const menuContainer = document.getElementById("menuToggle");

button.addEventListener("click", () => {
	menuContainer.classList.toggle("on");
});
