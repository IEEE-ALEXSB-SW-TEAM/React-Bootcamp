const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

// Array to store tasks
let tasks = [];

// Handle form submission to add a new task
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    tasks.push({ text: todoText, done: false });
    todoInput.value = "";
    renderTasks();
  }
});

  // Render tasks based on their state
function renderTasks() {
  // Clear current lists
  todoList.innerHTML = '';
  doneList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Create span to show the task text
    const span = document.createElement('span');
    span.textContent = task.text;
    // Toggle visual "completed" state on text click (for tasks not done)
    span.addEventListener('click', () => {
      if (!task.done) li.classList.toggle('completed');
    });
    li.appendChild(span);

    // If the task is not done, add a "Done" button
    if (!task.done) {
      const doneButton = document.createElement('button');
      doneButton.textContent = "Done";
      doneButton.classList.add('done-btn');
      doneButton.addEventListener('click', () => {
        task.done = true;
        renderTasks();
      });
      li.appendChild(doneButton);
    }

    // Delete button is added for every task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(deleteButton);

    // Append the task to the appropriate list based on its status
    if (task.done) {
      doneList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }
  });
}