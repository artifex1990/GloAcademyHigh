const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const getData = key => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, item) => localStorage.setItem(key, JSON.stringify(item));

const render = () => {
    const toDoData = getData('toDoData');
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach(item => {
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
            setData('toDoData', toDoData);
            render();
        });

        li.querySelector('.todo-remove').addEventListener('click', () => {
            setData('toDoData', toDoData.filter(el => el.id !== item.id));
            render();
        });
    }); 
};

todoControl.addEventListener('submit', (event) => {
    const toDoData = getData('toDoData');
    
    event.preventDefault();

    if (!headerInput.value.trim()) {
        headerInput.value = '';

        return;
    }

    const newTodo = {
        id: (new Date()).getTime(),
        text: headerInput.value.trim(),
        completed: false
    };

    toDoData.push(newTodo);
    setData('toDoData', toDoData);
    headerInput.value = '';

    render();
});

render();