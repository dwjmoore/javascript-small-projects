let toDoItems = [];

const addToDo = (text) => {
	const toDo = {
		text,
		checked: false,
		id: Date.now()
	};

	toDoItems.push(toDo);
	console.log(toDoItems);
}

const form = document.querySelector('.todo-input-form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const input = document.querySelector('#input');

	const text = input.value.trim();
	if (text !== '') {
		addToDo(text);
		input.value = '';
		input.focus();
	}
});