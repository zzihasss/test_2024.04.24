let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	// e 꼭 쓰기, e = event
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
});
