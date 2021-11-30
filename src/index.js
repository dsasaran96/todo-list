import './style.css';
import { format, formatDistanceToNowStrict } from 'date-fns';

//have to do: 
//edit button
//projects (should be really easy);

//DOM cache

const body = document.getElementsByTagName("BODY")[0];
const addTop = document.getElementById("add");
const addBtm = document.getElementById('addTaskBtm');
const taskList = document.getElementById('taskList');

const span = document.querySelector('.close');
const text = document.getElementById("modalContent");
const modalDate = document.getElementById("modalDate");
const modalSubmit = document.getElementById("Submit");
const modalForm = document.getElementById("Modal");

const sideBar = document.getElementById('sideBar');
const inbox = document.getElementById('inbox');
const thisDay = document.getElementById('thisDay');
const week = document.getElementById('week');
const projects = document.getElementById('projects');

//side bar

week.addEventListener('click', () => {
    UI.setActive(week);
    UI.displayWeek();
})

thisDay.addEventListener('click', (e) => {
    UI.displayToday();
    UI.setActive(thisDay);
})

inbox.addEventListener('click', (e) => {
    UI.setActive(inbox);
    UI.resetTaskList();
    UI.displayTasks();
})

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
    const prioAdd = document.querySelector('input[name="priority"]:checked').value;
    const contentAdd = text.value;
    const dateAdd = modalDate.value;

    if(text === '') {
        alert('Please fill the task');
    } else {

    const task = new Task(prioAdd, contentAdd, dateAdd);

    Store.addTask(task);
    UI.addTaskToList(task);
    UI.clearFields();
    UI.resetTaskList();
    UI.displayTasks();
    UI.setActive(inbox);
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

        const taskToAdd = new Task('low', content.innerText, today);

        Store.addTask(taskToAdd);
        UI.clearFields();

        quickAdd.value = '';
    } else {
        alert('Please fill the quick add section');
    }
})

//add task from form

class Task {
    constructor (priority, content, date) {
        this.priority = priority;
        this.content = content;
        this.date = date;
    }
}

class UI {
    static displayTasks () {
        const tasks = Store.getTasks();

        tasks.forEach((task) => {
            UI.addTaskToList(task);
        })
    }

    static displayToday() {
        const tasks = Store.getTasks();
        
        UI.resetTaskList();
        tasks.forEach((task) => {
            const day = format(new Date(), 'yyyy-MM-dd');
            if(task.date == day) {
                UI.addTaskToList(task);
            }
        })
    }

    static displayWeek() {
        const tasks = Store.getTasks();
        
        UI.resetTaskList();
        tasks.forEach((task) => {
            const dateComp = new Date(task.date);
            const weekComp = formatDistanceToNowStrict(dateComp, { unit: 'day', roundingMethod: 'floor'}).split(' ')[0];
            if(weekComp <= 7) {
                UI.addTaskToList(task);
            }
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

    static setActive(button) {

            inbox.classList.remove('active');
            inbox.classList.remove('no-hover');
    
            thisDay.classList.remove('active');
            thisDay.classList.remove('no-hover');
    
            week.classList.remove('active');
            week.classList.remove('no-hover');
    
            projects.classList.remove('active');
            projects.classList.remove('no-hover');
    
            button.classList.add('active');
            button.classList.add('no-hover');
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

