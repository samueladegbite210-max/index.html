// ==========================
// AI Life Assistant - Tasks
// ==========================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const taskPriority = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");

// Add Task
function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        id: Date.now(),

        text: text,

        priority: taskPriority.value,

        done: false

    });

    saveTasks();

    taskInput.value = "";

}

// Save Tasks
function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

}

// Render Tasks
function renderTasks(){

    taskList.innerHTML = "";

    if(tasks.length === 0){

        taskList.innerHTML = "<p>No tasks yet.</p>";

        return;

    }

    tasks.forEach(task=>{

        const li = document.createElement("li");

        li.innerHTML = `

        <span
        onclick="toggleTask(${task.id})"
        style="
        cursor:pointer;
        text-decoration:${task.done ? "line-through" : "none"};
        ">

        ${task.done ? "✅" : "⬜"}

        ${task.text}

        <small>(${task.priority})</small>

        </span>

        <button
        class="deleteBtn"
        onclick="deleteTask(${task.id})">

        🗑️

        </button>

        `;

        taskList.appendChild(li);

    });

}

// Complete Task
function toggleTask(id){

    tasks = tasks.map(task=>{

        if(task.id === id){

            task.done = !task.done;

        }

        return task;

    });

    saveTasks();

}

// Delete Task
function deleteTask(id){

    tasks = tasks.filter(task=>task.id !== id);

    saveTasks();

}

// Start
renderTasks();
