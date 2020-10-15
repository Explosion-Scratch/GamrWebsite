function darkMode() {
	element = document.querySelector("*");
	element.classList.toggle('dark-mode');
	window.localStorage.setItem('dark_mode', 'true')
};