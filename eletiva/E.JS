const nav = document.querySelector('nav');
const stickyNav = nav.offsetTop;

function fixNav() {
	if (window.scrollY >= stickyNav) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('sticky');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('sticky');
	}
}


