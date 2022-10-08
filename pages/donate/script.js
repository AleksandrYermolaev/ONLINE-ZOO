const buttonDonate = document.querySelector('.button-donate');
const email = document.querySelector('.email');
const buttonSubmit = document.querySelector('.submit');
const burgerMenu = document.querySelector('.burger-menu');
const background = document.querySelector('.background');
const burgerContainer = document.querySelector('.burger-container');
const closeIcon = document.querySelector('.close-menu');
const burgerIcon = document.querySelector('.menu-button');
const body = document.querySelector('body');
const list = document.querySelectorAll('.burger-menu__item a' );
const burgerText = document.querySelector('.burger-text');

const pointer = document.querySelector('.pointer');
const dots = document.querySelectorAll('.dot');
const sums = document.querySelectorAll('.sum');
const radios = document.querySelectorAll('.period');
const labels = document.querySelectorAll('.label');
const input = document.querySelector('.another-money');

	if (window.screen.width > 1200) {
		pointer.value = 5;
	}
	if (window.screen.width < 1201 && window.screen.width > 860) {
		pointer.value = 4;
	}
	if (window.screen.width < 861) {
		pointer.value = 2;
	}


buttonDonate.addEventListener('click', goDonate);
email.addEventListener('input', confirmEmail);
dots.forEach(value => {
	value.addEventListener('click', changePointerByDot)
});
burgerIcon.addEventListener('click', openMenu);
burgerMenu.addEventListener('click', closeMenu);
burgerText.addEventListener('click', closeMenu);	
sums.forEach(value => {
	value.addEventListener('click', changePointerBySum)
});
pointer.addEventListener('change', highlightSum);
labels.forEach(value => {
	value.addEventListener('click', changeRadio)
});
input.addEventListener('input', maxMoney);


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
	if (window.screen.width > 1200) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < dots.length; i++) {
			if (event.target === dots[i]) {
				pointer.value = i;
				sums[i].classList.add('active');
				input.value = sums[i].textContent.slice(1);
			}
		}
	}
	if (window.screen.width < 1201 && window.screen.width > 860) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < dots.length; i++) {
			if (event.target === dots[i]) {
				pointer.value = i;
				sums[i+1].classList.add('active');
				input.value = sums[i+1].textContent.slice(1);
			}
		}
	}
	if (window.screen.width < 861) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < dots.length; i++) {
			if (event.target === dots[i]) {
				pointer.value = i;
				sums[i+3].classList.add('active');
				input.value = sums[i+3].textContent.slice(1);
			}
		}
	}
}
function highlightSum() {
	if (window.screen.width > 1200) {
		sums.forEach(value => value.classList.remove('active'));
		sums[pointer.value].classList.add('active');
		input.value = sums[pointer.value].textContent.slice(1);
	}
	if (window.screen.width < 1201 && window.screen.width > 860) {
		sums.forEach(value => value.classList.remove('active'));
		sums[+pointer.value + 1].classList.add('active');
		input.value = sums[+pointer.value + 1].textContent.slice(1);
	}
	if (window.screen.width < 861) {
		sums.forEach(value => value.classList.remove('active'));
		sums[+pointer.value + 3].classList.add('active');
		input.value = sums[+pointer.value + 3].textContent.slice(1);
	}
}
function changePointerBySum(event) {
	if (window.screen.width > 1200) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < sums.length; i++) {
			if (event.target === sums[i]) {
				pointer.value = i;
				sums[i].classList.add('active');
				input.value = sums[i].textContent.slice(1);
			}
		}
	}
	if (window.screen.width < 1201 && window.screen.width > 860) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < sums.length; i++) {
			if (event.target === sums[i]) {
				pointer.value = i-1;
				sums[i].classList.add('active');
				input.value = sums[i].textContent.slice(1);
			}
		}
	}
	if (window.screen.width < 861) {
		sums.forEach(value => value.classList.remove('active'));
		for (let i = 0; i < sums.length; i++) {
			if (event.target === sums[i]) {
				pointer.value = i-3;
				sums[i].classList.add('active');
				input.value = sums[i].textContent.slice(1);
			}
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
function maxMoney() {
	if (this.value.length > 4) {
		this.value = this.value.slice(0, 4);
	}
	if (window.screen.width > 1200) {
		switch (this.value) {
			case '5000': 
				pointer.value = 0;
				highlightSum();
				break;
			case '2000': 
				pointer.value = 1;
				highlightSum();
				break;
			case '1000': 
				pointer.value = 2;
				highlightSum();
				break;
			case '500': 
				pointer.value = 3;
				highlightSum();
				break;
			case '250': 
				pointer.value = 4;
				highlightSum();
				break;
			case '100': 
				pointer.value = 5;
				highlightSum();
				break;
			case '50': 
				pointer.value = 6;
				highlightSum();
				break;	
			case '25': 
				pointer.value = 7;
				highlightSum();
				break;	
		}
	}
	if (window.screen.width < 1201 && window.screen.width > 860) {
		switch (this.value) {
			case '2000': 
				pointer.value = 0;
				highlightSum();
				break;
			case '1000': 
				pointer.value = 1;
				highlightSum();
				break;
			case '500': 
				pointer.value = 2;
				highlightSum();
				break;
			case '250': 
				pointer.value = 3;
				highlightSum();
				break;
			case '100': 
				pointer.value = 4;
				highlightSum();
				break;
			case '50': 
				pointer.value = 5;
				highlightSum();
				break;
			case '25': 
				pointer.value = 6;
				highlightSum();
				break;	
		}
	}
	if (window.screen.width < 861) {
		switch (this.value) {
			case '500': 
				pointer.value = 0;
				highlightSum();
				break;
			case '250': 
				pointer.value = 1;
				highlightSum();
				break;
			case '100': 
				pointer.value = 2;
				highlightSum();
				break;
			case '50': 
				pointer.value = 3;
				highlightSum();
				break;
			case '25': 
				pointer.value = 4;
				highlightSum();
				break;
		}
	}
}
function openMenu() {
	burgerMenu.classList.remove('hide');
	background.classList.remove('hide');
	background.classList.remove('opacity');
	burgerContainer.classList.remove('move');
}
function closeMenu(event) {
	if (event.target.classList.contains('background') || event.target.classList.contains('close')) {
		burgerMenu.classList.add('hide');
		background.classList.add('hide');
		background.classList.add('opacity');
		burgerContainer.classList.add('move');
	}
}