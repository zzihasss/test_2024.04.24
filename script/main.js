let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
});
