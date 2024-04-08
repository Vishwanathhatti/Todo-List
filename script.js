var list = document.querySelector('.todo-list');
var todoInput = document.querySelector('.todoInput');
var addTodoBtn = document.querySelector('.addTodoBtn');
var deleteAllBtn = document.querySelector('.deleteAll');

function clearValue() {
    todoInput.value = '';
}

// Event delegation for handling clicks on delete buttons
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});

// Event delegation for handling checkbox clicks
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
        var todoName = e.target.nextElementSibling; // Selecting the next sibling element
        if (e.target.checked) {
            todoName.style.textDecoration = "line-through";
        } else {
            todoName.style.textDecoration = "none";
        }
    }
});

// Function to add a new todo item
function addTodo() {
    let work = todoInput.value;
    if (work.trim() === '') {
        alert("The input field must not be empty");
        return;
    }

    let template = `
    <div class="todo">
        <input type="checkbox" class="checkbox">
        <p class="todoName">${work}</p>
        <i class="fa-solid fa-trash delete"></i>
    </div>
    `;
    list.insertAdjacentHTML('beforeend', template); // Append new todo item to the list
    clearValue();
}

// Event listener for clicking the Add button
addTodoBtn.addEventListener('click', addTodo);

// Event listener for pressing Enter in the input field
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission if it's inside a form
        addTodo();
    }
});
// Event listener for clearing all todo items
deleteAllBtn.addEventListener('click', () => {
    var todoItems = document.querySelectorAll('.todo');
    todoItems.forEach(item => {
        item.remove();
    });
});
