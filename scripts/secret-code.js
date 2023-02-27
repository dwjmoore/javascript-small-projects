let pressed = [];
const codeArray = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'b',
	'a',
	'Enter'
];
const code = codeArray.join('');

window.addEventListener('keyup', (event) => {
	pressed.push(event.key);
	pressed.splice(-codeArray.length - 1, pressed.length - codeArray.length);

	if (pressed.join('') === code) {
		console.log('You did it!');
	}
});