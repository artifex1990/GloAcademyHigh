const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = [];

const checkLocalStorage = () => {
    if (localStorage.getItem('toDoData')) {
        toDoData = JSON.parse(localStorage.getItem('toDoData'));
    }
};

const render = () => {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach(item => {
        if (!item.text) return;

        const li = document.createElement('li');
        
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>'+
                        '<div class="todo-buttons">'+
                            '<button class="todo-remove"></button>'+
                            '<button class="todo-complete"></button>' +
                        '</div>';
        
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed;
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
            render();
        });

        li.querySelector('.todo-remove').addEventListener('click', () => {
            toDoData = toDoData.filter(el => el.id !== item.id);
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
            render();
        });
    }); 
};

todoControl.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTodo = {
        id: (new Date()).getTime(),
        text: headerInput.value,
        completed: false
    };

    toDoData.push(newTodo);
    localStorage.setItem('toDoData', JSON.stringify(toDoData));
    headerInput.value = '';

    render();
});

checkLocalStorage();
render();