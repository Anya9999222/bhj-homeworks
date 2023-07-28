const form = document.querySelector(".tasks__control");
const input = document.querySelector(".tasks__input");
const button = document.querySelector(".tasks__add");
const taskList = document.getElementById("tasks__list");

function addTask(e) {
	e.preventDefault();
    if (input.value) {
    	const toDo = document.createElement("div");
		taskList.appendChild(toDo);
		toDo.classList.add('task');

		const toDoEl = document.createElement("div");
		toDo.appendChild(toDoEl);
		toDoEl.classList.add("task__title");

		const remove = document.createElement('a');
		remove.setAttribute('href', "#");
		remove.classList.add("task__remove");
		toDo.appendChild(remove);

		const close = document.createTextNode("\u00D7");
		remove.textContent = close.textContent;

		toDoEl.textContent = input.value;
		
	}
	const crosses = document.querySelectorAll('.task__remove');
	for (let i = 0; i < crosses.length; i++) {
		crosses[i].addEventListener('click', function() {
			this.parentNode.remove()
		})
	}
	form.reset()
}


form.addEventListener("submit", addTask)