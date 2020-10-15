function darkMode() {
	element = document.querySelector("*");
	window.localStorage.setItem('dark_mode', element.classList.toggle('dark-mode'))
};