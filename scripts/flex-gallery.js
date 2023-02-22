const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4');
const panel5 = document.querySelector('.panel5');

const toggleOpen1 = () => {
	panel1.classList.toggle('open');
}

const toggleOpen2 = () => {
	panel2.classList.toggle('open');
}

const toggleOpen3 = () => {
	panel3.classList.toggle('open');
}

const toggleOpen4 = () => {
	panel4.classList.toggle('open');
}

const toggleOpen5 = () => {
	panel5.classList.toggle('open');
}

const toggleActive1 = (event) => {
	if (event.propertyName.includes('flex')) {
		panel1.classList.toggle('open-active');
	}
}

const toggleActive2 = (event) => {
	if (event.propertyName.includes('flex')) {
		panel2.classList.toggle('open-active');
	}
}

const toggleActive3 = (event) => {
	if (event.propertyName.includes('flex')) {
		panel3.classList.toggle('open-active');
	}
}

const toggleActive4 = (event) => {
	if (event.propertyName.includes('flex')) {
		panel4.classList.toggle('open-active');
	}
}

const toggleActive5 = (event) => {
	if (event.propertyName.includes('flex')) {
		panel5.classList.toggle('open-active');
	}
}

panel1.addEventListener('click', toggleOpen1);
panel2.addEventListener('click', toggleOpen2);
panel3.addEventListener('click', toggleOpen3);
panel4.addEventListener('click', toggleOpen4);
panel5.addEventListener('click', toggleOpen5);

panel1.addEventListener('transitionend', toggleActive1);
panel2.addEventListener('transitionend', toggleActive2);
panel3.addEventListener('transitionend', toggleActive3);
panel4.addEventListener('transitionend', toggleActive4);
panel5.addEventListener('transitionend', toggleActive5);