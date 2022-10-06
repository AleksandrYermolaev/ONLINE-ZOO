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



buttonFeedFriend.addEventListener('click', goDonate);
buttonDonate.addEventListener('click', goDonate);
email.addEventListener('input', confirmEmail);
burgerIcon.addEventListener('click', openMenu);
burgerMenu.addEventListener('click', closeMenu);
burgerText.addEventListener('click', closeMenu);	
input.addEventListener('change', changeTestimonial);

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