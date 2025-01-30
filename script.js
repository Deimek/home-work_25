


const formBtn = document.querySelector('.form__btn');
const formInput = document.querySelector('.js--form__input');

// ---------------------------------------------------------------------------
formBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formInputValue = formInput.value.trim();
    if (formInputValue === '') {
        return;
    }

    const todoItems = document.querySelectorAll('.todo-item');

    for (let item of todoItems) {

        const description = item.querySelector('.todo-item__description');

        if (description.textContent === 'Text') {
            description.textContent = formInputValue;
            formInput.value = '';
            localStorage.setItem(`descriptionText`, formInputValue);
            return;
        }
    }
});
// --------------------------------------------------------------------------------------
const localStorageSavedDescription = localStorage.getItem(`descriptionText`);
if (localStorageSavedDescription) {
    document.querySelector('.todo-item__description').textContent = localStorageSavedDescription;
}
// --------------------------------------------------------------------------------------
document.querySelectorAll('.todo-item__delete').forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (event) => {

        const itemLi = event.target.closest('.todo-item');
        const description = itemLi.querySelector('.todo-item__description');
        const checkbox = itemLi.querySelector('input[type="checkbox"]');

        description.textContent = 'Text';
        checkbox.checked = false;

        localStorage.setItem('descriptionDeleteText', description.textContent);
        localStorage.setItem('checkbox', checkbox.checked);
    });
});
// -------------------------------------------------------------------------------------------
document.querySelectorAll('.todo-item input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {

        localStorage.setItem('checkbox', checkbox.checked);
    });
});
// ----------------------------------------------------------------------------------------
const localStorageSavedCheckbox = localStorage.getItem('checkbox');
if (localStorageSavedCheckbox !== null) {
    document.querySelector('.todo-item input[type="checkbox"]').checked = JSON.parse(localStorageSavedCheckbox);
}
// ---------------------------------------------------------------------------------------------------



// document.querySelectorAll('.todo-item__delete').forEach((deleteBtn) => {
//     deleteBtn.addEventListener('click', (event) => {

//         const parent = event.target.parentElement;

//         if (parent.classList.contains('todo-item')) {

//             const description = parent.querySelector('.todo-item__description');
//             const checkbox = parent.querySelector('input[type="checkbox"]');

//             description.textContent = 'Text';
//             checkbox.checked = false;
//         }
//     });
// });

// --------------------------------------------------------------------
// const person = {
//     name: 'Oleh',
//     age: 40
// }
// const personJson = JSON.stringify(person, null, ' ');
// console.log(personJson);

// const personParce = JSON.parse(personJson);
// console.log(personParce);

// ------------------------------------------------------------------------
