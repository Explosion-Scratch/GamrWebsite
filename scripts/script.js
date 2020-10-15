window.onload = function(){
	if (window.localStorage.getItem('dark_mode')) {
		darkMode();
	}
}
function darkMode() {
	element = document.querySelector("*");
	window.localStorage.setItem('dark_mode', element.classList.toggle('dark-mode'))
};