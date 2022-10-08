const buttonFeedFriend = document.querySelector('.button-feed-friend');
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
const cardsBlock = document.querySelector('.cards');
const input = document.querySelector('.input');
const testimonials = document.querySelectorAll('.card__block');
const popup = document.querySelector('.popup');
const popupIn = document.querySelector('.card__popup');
let text;
const slider = document.querySelector('.pets-container');
const buttonLeft = document.querySelector('.arrow-left');
const buttonRight = document.querySelector('.arrow-right');


buttonFeedFriend.addEventListener('click', goDonate);
buttonDonate.addEventListener('click', goDonate);
email.addEventListener('input', confirmEmail);
burgerIcon.addEventListener('click', openMenu);
burgerMenu.addEventListener('click', closeMenu);
burgerText.addEventListener('click', closeMenu);	
input.addEventListener('change', changeTestimonial);
testimonials.forEach(openPopup);
popup.addEventListener('click', closePopup);
let isReady = true;
buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', prevSlide);

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
function changeTestimonial() {
	const value = input.value;
	const width = window.screen.width;
	if (width > 1150) {
		if (value !== 1) {
			cardsBlock.classList.remove('class2');
			cardsBlock.classList.remove('class3');
			cardsBlock.classList.remove('class4');
			cardsBlock.classList.remove('class5');
			cardsBlock.classList.remove('class6');
			cardsBlock.classList.remove('class7');
			cardsBlock.classList.remove('class8');
			cardsBlock.classList.add(`class${value}`);
		} else {
			cardsBlock.classList.remove('class2');
			cardsBlock.classList.remove('class3');
			cardsBlock.classList.remove('class4');
			cardsBlock.classList.remove('class5');
			cardsBlock.classList.remove('class6');
			cardsBlock.classList.remove('class7');
			cardsBlock.classList.remove('class8');
			cardsBlock.classList.remove('class-1000-2');
			cardsBlock.classList.remove('class-1000-3');
			cardsBlock.classList.remove('class-1000-4');
			cardsBlock.classList.remove('class-1000-5');
			cardsBlock.classList.remove('class-1000-6');
			cardsBlock.classList.remove('class-1000-7');
			cardsBlock.classList.remove('class-1000-8');
		}
	} else {
		if (value !== 1) {
			cardsBlock.classList.remove('class2');
			cardsBlock.classList.remove('class3');
			cardsBlock.classList.remove('class4');
			cardsBlock.classList.remove('class5');
			cardsBlock.classList.remove('class6');
			cardsBlock.classList.remove('class7');
			cardsBlock.classList.remove('class8');
			cardsBlock.classList.remove('class-1000-2');
			cardsBlock.classList.remove('class-1000-3');
			cardsBlock.classList.remove('class-1000-4');
			cardsBlock.classList.remove('class-1000-5');
			cardsBlock.classList.remove('class-1000-6');
			cardsBlock.classList.remove('class-1000-7');
			cardsBlock.classList.remove('class-1000-8');
			cardsBlock.classList.add(`class-1000-${value}`);
		} else {
			cardsBlock.classList.remove('class2');
			cardsBlock.classList.remove('class3');
			cardsBlock.classList.remove('class4');
			cardsBlock.classList.remove('class5');
			cardsBlock.classList.remove('class6');
			cardsBlock.classList.remove('class7');
			cardsBlock.classList.remove('class8');
			cardsBlock.classList.remove('class-1000-2');
			cardsBlock.classList.remove('class-1000-3');
			cardsBlock.classList.remove('class-1000-4');
			cardsBlock.classList.remove('class-1000-5');
			cardsBlock.classList.remove('class-1000-6');
			cardsBlock.classList.remove('class-1000-7');
			cardsBlock.classList.remove('class-1000-8');
		}
	}
}
function openPopup(value) {
	value.addEventListener('click', () => {
		text = value.innerHTML;
		popupIn.insertAdjacentHTML('beforeend', text);
		popup.classList.remove('none');
		popupIn.querySelector('.card__block-head').classList.add('card__popup-head');
		popupIn.querySelector('.name').classList.add('popup-name');
		popupIn.querySelector('.location').classList.add('popup-location');
		popupIn.querySelector('.card__block-body').classList.add('popup-body');
		popupIn.querySelectorAll('.text').forEach(value => value.classList.add('popup-text'));
	})
}
function closePopup(event) {
	if (event.target.classList.contains('popup-background') || event.target.classList.contains('close')) {
		popup.classList.add('none');
		popupIn.innerHTML = '';
	}
}
function randomizeImagesFirst() {
	const arr = [];
	while (arr.length < 6) {
		let num = Math.floor(1 + 6*Math.random());
		if (arr.includes(num)) {
			num = Math.floor(1 + 6*Math.random());
		} else {
			arr.push(num);
		}
	}
	const images = document.querySelectorAll('.pets-container > .all-pets:first-child > .single-pet');
	for (let i = 0; i < images.length; i++) {
		images[i].style.order = `${arr[i]}`;
	}
} randomizeImagesFirst();

function randomizeImagesLast() {
	const arr = [];
	while (arr.length < 6) {
		let num = Math.floor(1 + 6*Math.random());
		if (arr.includes(num)) {
			num = Math.floor(1 + 6*Math.random());
		} else {
			arr.push(num);
		}
	}
	const images = document.querySelectorAll('.pets-container > .all-pets:last-child > .single-pet');
	for (let i = 0; i < images.length; i++) {
		images[i].style.order = `${arr[i]}`;
	}
} randomizeImagesLast();

function nextSlide() {
	if (isReady) {
		isReady = false;
		slider.style.transition = '0.5s ease';
		slider.style.transform = 'translateX(-202%)';
		setTimeout(() => { 
			slider.style.transition = 'none';
			slider.style.transform = 'translateX(-101%)';
			document.querySelector('.all-pets').remove();
			isReady = true;
		}, 500);
		slider.insertAdjacentHTML('beforeend', document.querySelector('.all-pets').outerHTML);
		randomizeImagesLast();
	}
}

function prevSlide() {
	if (isReady) {
		isReady = false;
		slider.style.transition = '0.5s ease';
		slider.style.transform = 'translateX(0%)';
		setTimeout(() => { 
			slider.insertAdjacentHTML('afterbegin', document.querySelector('.all-pets:last-child').outerHTML);
			slider.style.transition = 'none';
			slider.style.transform = 'translateX(-101%)';
			document.querySelector('.all-pets:last-child').remove();
			isReady = true;
		}, 500);
		randomizeImagesFirst();
	}
}