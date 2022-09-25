const buttonDonate = document.querySelector('.button-donate');
const email = document.querySelector('.email');
const buttonSubmit = document.querySelector('.submit');
const pointer = document.querySelector('.pointer');
const dots = document.querySelectorAll('.dot');
const sums = document.querySelectorAll('.sum');
const radios = document.querySelectorAll('.period');
const labels = document.querySelectorAll('.label');

buttonDonate.addEventListener('click', goDonate);
email.addEventListener('input', confirmEmail);
dots.forEach(value => {
	value.addEventListener('click', changePointerByDot)
});
sums.forEach(value => {
	value.addEventListener('click', changePointerBySum)
});
pointer.addEventListener('change', highlightSum);
labels.forEach(value => {
	value.addEventListener('click', changeRadio)
});

function goDonate() {
	document.location = 'https://aleksandryermolaev.github.io/ONLINE-ZOO/pages/donate/';
}
function isValid() {
	const emailValue = email.value;
	const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
	return regExp.test(emailValue);
}
function confirmEmail() {
	email.classList.add('mistake');
	buttonSubmit.classList.add('mistake');
	buttonSubmit.disabled = true;
	const isEmailValid = isValid();
	if (isEmailValid) {
		email.classList.remove('mistake');
		buttonSubmit.disabled = false;
		buttonSubmit.classList.remove('mistake');
	}
}
function changePointerByDot(event) {
	sums.forEach(value => value.classList.remove('active'));
	for (let i = 0; i < dots.length; i++) {
		if (event.target === dots[i]) {
			pointer.value = i;
			sums[i].classList.add('active');
		}
	}
}
function highlightSum() {
	sums.forEach(value => value.classList.remove('active'));
	sums[pointer.value].classList.add('active');
}
function changePointerBySum(event) {
	sums.forEach(value => value.classList.remove('active'));
	for (let i = 0; i < sums.length; i++) {
		if (event.target === sums[i]) {
			pointer.value = i;
			sums[i].classList.add('active');
		}
	}
}
function changeRadio(event) {
	labels.forEach(value => value.classList.remove('checked'));
	for (let i = 0; i < labels.length; i++) {
		if (event.target === labels[i]) {
			radios[i].checked = true;
			labels[i].classList.add('checked');
		}
	}
}
