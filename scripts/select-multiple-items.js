const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
	let inBetween = false;
	if (event.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			checkbox === this || checkbox === lastChecked ? inBetween = !inBetween : null;
			inBetween ? checkbox.checked = true : null;
		})
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));