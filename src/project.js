import { todoContent, createToDo } from "./todo.js";
import './style.css';
let inputVisible = false;
let buttonShown= false;


function createProject(title) {
    this.title = title;
    this.arr = [];
}

function showProject(project) {
    const projectContainer = document.querySelector(".projects");
    const todoContainer = document.querySelector('.tasks');
    const title = document.createElement("h1");
    title.textContent = project.title;
    title.classList.add('project-card');
    projectContainer.appendChild(title);
    if(!buttonShown){
    let crtodo = document.createElement('button');
    crtodo.textContent = 'Create A Task';
    todoContainer.appendChild(crtodo);
    crtodo.addEventListener('click', () => {
        if(!inputVisible){
        showInput(todoContainer, project);
        inputVisible=true;
    
    }}
        );
    buttonShown=true;
}
    title.addEventListener('click',()=>{
        showTasks(project, todoContainer);
            let crtodo = document.createElement('button');
            crtodo.textContent = 'Create A Task';
            todoContainer.prepend(crtodo);
            crtodo.addEventListener('click', () => {
                if(!inputVisible){
                showInput(todoContainer, project);
                inputVisible=true;
            
            }}
                );

    })
    
}

function showTodo(project, projectContainer) {
    const latestTask = project.arr[project.arr.length - 1];
    let content = todoContent(latestTask); 
    projectContainer.appendChild(content); 
}

function showInput(projectContainer, project) {
    const cont = document.createElement('div');
    const t = document.createElement('input');
    t.type = "text";
    t.placeholder = "title";
    cont.appendChild(t);

    const d = document.createElement('input');
    d.type = "text";
    d.placeholder = "description";
    cont.appendChild(d);

    const date = document.createElement('input');
    date.type = "date";
    cont.appendChild(date);

    const p = document.createElement('input');
    p.placeholder = "priority";
    p.type = "number";
    p.min = 1;
    p.max = 10;
    cont.appendChild(p);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    cont.appendChild(submit);

    projectContainer.prepend(cont);

    submit.addEventListener('click', () => {
        submitTask(t, d, date, p, project, projectContainer);
        cont.innerHTML = "";
        inputVisible = false;
    });
}


function submitTask(t, d, date, p, project, projectContainer) {
    let tt = t.value;
    let dd = d.value;
    let ddate = date.value;
    let pp = p.value;
    const todo1 = new createToDo(tt, dd, ddate, pp);
    project.arr.push(todo1);
    showTodo(project, projectContainer);
    t.value = '';
    d.value = '';
    date.value = '';
    p.value = '';
}
function showTasks(project, container){
    container.innerHTML='';
for (let i =0;i<project.arr.length;i++){
   let  content=todoContent(project.arr[i]);
    container.appendChild(content);
}
}

export { createProject, showProject };
