const form = document.querySelector(".tasks__control");
const input = document.querySelector(".tasks__input");
const taskList = document.getElementById("tasks__list");

function addTask(e) {
	e.preventDefault();
    if (input.value.trim() !== '') {
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
	form.reset()
}

function remove(event){
	event.preventDefault();
	let target = event.target;
	if(target.classList.contains('task__remove')){
		let deleted = target.closest('.task');
		deleted.remove();
	}
}

form.addEventListener("submit", addTask);
taskList.addEventListener('click', remove)