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
	localStorage.setItem('toDoItemsRef', JSON.stringify(toDoItems));

	item = document.querySelector(`[data-key = '${toDo.id}']`);

	if (toDo.deleted) {
		item.remove();
		return;
	}

	const isChecked = toDo.checked ? 'done' : '';
	const node = document.createElement("div");

	node.setAttribute('class', `todo-item ${isChecked}`);
	node.setAttribute('data-key', toDo.id);

	node.innerHTML = `
 		<input id="${toDo.id}" type="checkbox" />
		<label for="${toDo.id}" class="tick"></label>
		<span>${toDo.text}</span>
		<i class="fa-regular fa-circle-xmark delete-todo"></i>
 	`;

	item ? list.replaceChild(node, item) : list.append(node);
}

const toggleDone = (key) => {
	const index = toDoItems.findIndex(item => item.id === Number(key));
	toDoItems[index].checked = !toDoItems[index].checked;
	renderToDo(toDoItems[index]);
}

const deleteToDo = (key) => {
	const index = toDoItems.findIndex(item => item.id === Number(key));
	const toDo = {
		deleted: true,
		...toDoItems[index]
	};
	toDoItems = toDoItems.filter(item => item.id !== Number(key));
	renderToDo(toDo);
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
	if (event.target.classList.contains('delete-todo')) {
		const itemKey = event.target.parentElement.dataset.key;
		console.log("Delete icon clicked");
		deleteToDo(itemKey);
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const ref = localStorage.getItem('toDoItemsRef');
	if (ref) {
		toDoItems = JSON.parse(ref);
		toDoItems.forEach(t => {
			renderToDo(t);
		});
	}
});