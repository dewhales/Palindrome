/*Color picker for background generator*/
let color = document.querySelector('#color');
let body = document.querySelector('body');
let input = document.querySelector('#input');

const SETGRADIENT = () => {
	body.style.background = color.value
	input.style.background = color.value
}

color.addEventListener('input', SETGRADIENT);





// checking if word is palindrome
let button = document.querySelector('#add');
let p = document.querySelector('#result');

function checkPalindromeOnClick() {
	if(input.value.length > 0) {
		checkPalindrome();
	}
}

function checkPalindromeOnKeyPress() {
	if(input.value.length > 0 && event.keyCode === 13) {
		checkPalindrome();
	}
}


function checkPalindrome(word = input.value) {
	let text = [];
	for (let i = 0; i < word.length; i++) {
		text.push(word[i]);
	}
	let textLowerCase = text.map(text => text.toLowerCase());
	let reversedText = [...textLowerCase].reverse();
	let joinedText = textLowerCase.reduce((a,b)=>a+b,'');
	let reversedJoinedText = reversedText.reduce((a,b)=>a+b,'');
	if (joinedText === reversedJoinedText) {
		p.textContent = `"${input.value}" is a Palindrome`;
	}else {
		p.textContent = `"${input.value}" is not a Palindrome`
	}
}

button.addEventListener('click', checkPalindromeOnClick);
input.addEventListener('keypress', checkPalindromeOnKeyPress);