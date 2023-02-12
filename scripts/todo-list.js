let toDoItems = [];

const addToDo = (text) => {
	const toDo = {
		text,
		checked: false,
		id: Date.now()
	};

	toDoItems.push(toDo);
	renderToDo(toDo);
}

const renderToDo = (toDo) => {
	const list = document.querySelector('#todo-list');
	const isChecked = toDo.checked ? 'done' : '';
	const node = document.createElement("li");

	node.setAttribute('class', `todo-item ${isChecked}`);
	node.setAttribute('data-key', toDo.id);

	node.innerHTML = `
 		<input id="${toDo.id}" type="checkbox" />
		<label for="${toDo.id}" class="tick"></label>
		<span>${toDo.text}</span>
		<button class="delete-todo">
			<i class="fa-regular fa-circle-xmark"></i>
		</button>
 	`;

	list.append(node);
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