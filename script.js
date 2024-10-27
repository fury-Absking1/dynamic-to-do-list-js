document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');   

    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click',   
 addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();   


        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const   
 removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click',   
 () => {
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }
});