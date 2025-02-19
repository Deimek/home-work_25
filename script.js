
const ulTodo = document.querySelector('.js--todos-wrapper');
const btnAddTodo = document.querySelector('.form__btn');
const inputTodo = document.querySelector('.js--form__input');

function saveToLocalStorage() {
    localStorage.setItem('todos', ulTodo.innerHTML);
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('todos');
    if (savedData) {
        ulTodo.innerHTML = savedData;
    }
}

loadFromLocalStorage();

ulTodo.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo-item__delete')) {
        event.target.parentElement.remove();
        saveToLocalStorage();
    }
});

ulTodo.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const listItem = event.target.closest('.todo-item');

        if (event.target.checked) {
            event.target.setAttribute('checked', 'checked');
            listItem.classList.add('todo-item--checked');
        } else {
            event.target.removeAttribute('checked');
            listItem.classList.remove('todo-item--checked');
        }

        saveToLocalStorage();
    }
});

btnAddTodo.addEventListener('click', (event) => {
    event.preventDefault();
    const inputTodoValue = inputTodo.value.trim();

    if (inputTodoValue === '') return;

    const liAddTodo = document.createElement('li');
    liAddTodo.classList.add('todo-item');

    const checkboxAdd = document.createElement('input');
    checkboxAdd.type = 'checkbox';

    const spanAdd = document.createElement('span');
    spanAdd.classList.add('todo-item__description');
    spanAdd.textContent = inputTodoValue;

    const btnDel = document.createElement('button');
    btnDel.classList.add('todo-item__delete');
    btnDel.textContent = 'Видалити';

    liAddTodo.appendChild(checkboxAdd);
    liAddTodo.appendChild(spanAdd);
    liAddTodo.appendChild(btnDel);

    ulTodo.appendChild(liAddTodo);

    inputTodo.value = '';

    saveToLocalStorage();
});


