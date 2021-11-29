import './style.css';
import { format } from 'date-fns';

//DOM cache

const body = document.getElementsByTagName("BODY")[0];
const addTop = document.getElementById("add");
const addBtm = document.getElementById('addTaskBtm');
const taskList = document.getElementById('taskList');

const span = document.querySelector('.close');
const prioLow = document.getElementById('low');
const prioMed = document.getElementById('medium');
const prioHigh = document.getElementById('high');
const text = document.getElementById("modalContent");
const modalDate = document.getElementById("modalDate");
const modalSubmit = document.getElementById("Submit");
const modalForm = document.getElementById("Modal");

//Popup modal

addTop.onclick = function () {
    modalForm.style.display = "block";
}

span.onclick = function() {
    modalForm.style.display = "none";
}

modalSubmit.onclick = function () {
    modalForm.style.display = 'none';
} 

window.onclick = function(event) {
    if(event.target == modalForm) {
        modalForm.style.display = "none";
    }
}

//modal funcionality

modalSubmit.addEventListener('click', (e) => {
    let prioAdd = document.querySelector('input[name="priority"]:checked').value;
    const contentAdd = text.value;
    const dateAdd = modalDate.value;

    if(text === '') {
        alert('Please fill the task');
    } else {

    const task = new Task(prioAdd, contentAdd, dateAdd);

    Store.addTask(task);
    UI.addTaskToList(task);
    UI.clearFields();
}});

//quick add

addBtm.addEventListener('click', () => {
    const quickAdd = document.getElementById('taskInputBtm');
    if(quickAdd.value != '') {
        const task = document.createElement('div');
        task.classList.add('task');

        const priority = document.createElement('div');
        priority.classList.add('priority-flag-low');

        const flag = document.createElement('i');
        flag.classList.add('fas');
        flag.classList.add('fa-flag');
        priority.appendChild(flag);

        const content = document.createElement('div');
        content.innerText = quickAdd.value;
        content.classList.add('task-content');

        const date = document.createElement('div');
        const today = format(new Date(), 'dd/MMM/yyyy');
        date.innerText = today;
        date.classList.add('date');

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const delBtn = document.createElement('div');
        delBtn.classList.add('delete');
        const delIcon = document.createElement('i');
        delIcon.classList.add('fas');
        delIcon.classList.add('fa-trash-alt');
        delBtn.appendChild(delIcon);
        addDelete(delBtn);

        const editBtn = document.createElement('div');
        editBtn.classList.add('edit');
        const editIcon = document.createElement('i');
        editIcon.classList.add('fas');
        editIcon.classList.add('fa-edit');
        editBtn.appendChild(editIcon);

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        task.appendChild(priority);
        task.appendChild(content);
        task.appendChild(date);
        task.appendChild(actions);

        taskList.appendChild(task);

        quickAdd.value = '';
    } else {
        alert('Please fill the quick add section');
    }
})

//add task from form

class Task {
    constructor (priority, content, date, completed = 0) {
        this.priority = priority;
        this.content = content;
        this.date = date;
        this.completed = completed;
    }
}

class UI {
    static displayTasks () {
        const tasks = Store.getTasks();

        tasks.forEach((task) => {
            UI.addTaskToList(task);
        })
    }
    
    static resetTaskList = () => {
        taskList.innerHTML = '';
    }

    static updateTaskList = () => {
        UI.resetTaskList();
        const tasks = Store.getTasks();

        tasks.forEach((task) => {
            UI.addTaskToList(task);
        })
    }

    static addTaskToList(task) {
        const divCreate = document.createElement('div');
        divCreate.classList.add('task');

        const priority = document.createElement('div');
        priority.classList.add(`priority-flag-${task.priority}`);

        const flag = document.createElement('i');
        flag.classList.add('fas');
        flag.classList.add('fa-flag');
        priority.appendChild(flag);

        const content = document.createElement('div');
        content.innerText = task.content;
        content.classList.add('task-content');

        const date = document.createElement('div');
        date.innerText = format(new Date(`${task.date}`), 'dd/MMM/yyyy');
        date.classList.add('date');

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const delBtn = document.createElement('div');
        delBtn.classList.add('delete');
        const delIcon = document.createElement('i');
        delIcon.classList.add('fas');
        delIcon.classList.add('fa-trash-alt');
        delBtn.appendChild(delIcon);
        delBtn.addEventListener('click', (e) => {
            Store.removeTask(e.target.parentElement.parentElement.parentElement.children[1].innerText);
            e.target.parentElement.parentElement.parentElement.remove();
        })

        const editBtn = document.createElement('div');
        editBtn.classList.add('edit');
        const editIcon = document.createElement('i');
        editIcon.classList.add('fas');
        editIcon.classList.add('fa-edit');
        editBtn.appendChild(editIcon);

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        divCreate.appendChild(priority);
        divCreate.appendChild(content);
        divCreate.appendChild(date);
        divCreate.appendChild(actions);

        taskList.appendChild(divCreate);
    }

    static clearFields() {
        text.value = '';
    }
}

//Store

class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(content) {
        const tasks = Store.getTasks();

        tasks.forEach((task, index) => {
            if(task.content === content) {
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

//display tasks

document.addEventListener('DOMContentLoaded', UI.displayTasks);


//delete function
