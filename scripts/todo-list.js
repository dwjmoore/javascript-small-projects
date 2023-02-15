let toDoItems = [];
const form = document.querySelector('.todo-input-form');
const list = document.querySelector('#todo-list');

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
	item = document.querySelector(`[data-key = '${toDo.id}']`);

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

	item ? list.replaceChild(node, item) : list.append(node);
}

const toggleDone = (key) => {
	const index = toDoItems.findIndex(item => item.id === Number(key));
	toDoItems[index].checked = !toDoItems[index].checked;
	renderToDo(toDoItems[index]);
}

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

list.addEventListener('click', event => {
	if (event.target.classList.contains('tick')) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}
});