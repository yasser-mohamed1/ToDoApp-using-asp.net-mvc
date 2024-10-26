const allBoxes = document.querySelectorAll('.box');
const allTasks = document.querySelectorAll('.task');

allTasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging')
    })
    task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
    })
})

allBoxes.forEach(box => {
    box.addEventListener('dragover', e => {
        e.preventDefault();

        const currentTask = document.querySelector('.is-dragging');

        if (currentTask.parentElement !== box) box.appendChild(currentTask);
    });
});

const form = document.getElementById('add-form');
const input = document.getElementById('todo-input');
const todoBox = document.getElementById('to-do');

form.addEventListener('submit', e => {
    e.preventDefault();

    const newTaskText = input.value;

    if (!newTaskText) return;

    const newTask = document.createElement('p');
    newTask.innerHTML = newTaskText;
    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true');

    newTask.addEventListener('dragstart', (e) => {
        newTask.classList.add('is-dragging');
    })

    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('is-dragging');
    })

    todoBox.appendChild(newTask);

    input.value = '';
})