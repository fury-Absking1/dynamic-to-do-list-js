document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');   

    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const   
 li = document.createElement('li');
            li.textContent = taskText;

            const   
 removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click',   
 () => {
                taskList.removeChild(li);
                // Remove task from local storage
                const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));   
  

            });

            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Add task to local storage
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));   


            taskInput.value   
 = '';
        } else {
            alert('Please enter a task.');
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // Add tasks without saving to avoid duplicates
        });
    }

    loadTasks();
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});