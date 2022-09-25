const buttonFeedFriend = document.querySelector('.button-feed-friend');
const buttonDonate = document.querySelector('.button-donate');
const email = document.querySelector('.email');
const buttonSubmit = document.querySelector('.submit');


buttonFeedFriend.addEventListener('click', goDonate);
buttonDonate.addEventListener('click', goDonate);
email.addEventListener('input', confirmEmail);

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
