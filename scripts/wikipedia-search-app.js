const submitButton = document.querySelector('#submit');
const input = document.querySelector('#input');
const errorSpan = document.querySelector('#error');
const resultsContainer = document.querySelector('#results');

const disableUi = () => {
	input.disabled = true;
	submitButton.disabled = true;
}

const enableUi = () => {
	input.disabled = false;
	submitButton.disabled = false;
}

const clearPreviousResults = () => {
	resultsContainer.innerHTML = '';
	errorSpan.innerHTML = '';
}

const isInputEmpty = (input) => {
	if (!input || input === '') return true;
	return false;
}

const showError = (error) => {
	errorSpan.innerHTML = `&#128680 ${error} &#128680`;
}