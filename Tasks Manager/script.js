document.addEventListener('DOMContentLoaded', loadTasks);

function addTask(mainTopic, subTopic, targetDate) {
    if (!mainTopic) {
        mainTopic = document.getElementById('main-topic').value;
        subTopic = document.getElementById('sub-topic').value;
        targetDate = document.getElementById('target-date').value;

        if (!mainTopic || !subTopic || !targetDate) {
            alert('Please fill out all fields');
            return;
        }
    }

    const task = {
        id: Date.now(),
        mainTopic,
        subTopic,
        targetDate
    };

    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
    clearForm();
}

function clearForm() {
    document.getElementById('main-topic').value = '';
    document.getElementById('sub-topic').value = '';
    document.getElementById('target-date').value = '';
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const tasksTableBody = document.getElementById('tasks-table-body');
    tasksTableBody.innerHTML = '';

    const tasks = getTasksFromLocalStorage();

    tasks.forEach(task => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${task.mainTopic}</td>
            <td>${task.subTopic}</td>
            <td>${task.targetDate}</td>
            <td class="actions">
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;

        tasksTableBody.appendChild(row);
    });
}

function editTask(id) {
    const tasks = getTasksFromLocalStorage();
    const task = tasks.find(task => task.id === id);

    if (task) {
        document.getElementById('main-topic').value = task.mainTopic;
        document.getElementById('sub-topic').value = task.subTopic;
        document.getElementById('target-date').value = task.targetDate;

        deleteTask(id);
    }
}

function deleteTask(id) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function addJavascriptStudyPlan() {
    const startDate = new Date();
    const topics = [
        'Introduction to JavaScript',
        'JavaScript Basics: Syntax, Variables, and Data Types',
        'Control Structures: Conditionals and Loops',
        'Functions and Scope',
        'Objects and Arrays',
        'DOM Manipulation',
        'Event Handling'
    ];

    topics.forEach((topic, index) => {
        const targetDate = new Date(startDate);
        targetDate.setDate(startDate.getDate() + index);
        const formattedDate = targetDate.toISOString().split('T')[0];

        addTask('JavaScript', topic, formattedDate);
    });
}
