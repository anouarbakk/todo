import { createToDo } from "./todo.js";
import { createProject } from "./project.js";
import { showProject } from "./project.js";
const btn=document.querySelector('.add-project');
btn.addEventListener('click',addproject);
let inp=document.querySelector('input');
inp.placeholder="Title";
function addproject(){
    let inp=document.querySelector('input');
    let titlee=inp.value;
    inp.value='';
    if (titlee.trim()!==""){
   const project= new createProject(titlee);
   showProject(project);
}else{
    alert('the title should not be empty');
}
}