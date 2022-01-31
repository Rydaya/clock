const deg = 6;

const $arrHours = document.querySelector('.arrHours');
const $arrMin = document.querySelector('.arrMin');
const $arrSec = document.querySelector('.arrSec');

setInterval(() => {
	const time = new Date();
	const hours = time.getHours() * 30;
	const minutes = time.getMinutes() * deg;
	const seconds = time.getSeconds() * deg;

	$arrHours.style.transform = `rotateZ(${hours}deg)`;
	$arrMin.style.transform = `rotateZ(${minutes}deg)`;
	$arrSec.style.transform = `rotateZ(${seconds}deg)`;
}, 1000)
