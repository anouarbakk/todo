function createToDo(title,description,date,periority){
   this.title=title;
   this.description=description;
   this.date=date;
   this.periority=periority;
    this.complete=false;
    
    this.getTitle=function(){
        return this.title;
    };
    this.getDescription = function(){
        return this.description;
    };
    this.getDate=function(){
        return this.date;
    };
    this.getPeriority=function(){
        return this.periority;
    };
    this.getStatus = function() {
        let status = this.complete ? 'completed' : 'not completed';
        return status;
    };
    this.changeStatus=function(){
        this.complete =!this.complete;
    }
    this.changePeriority=function(newPeriority){
        this.periority=newPeriority;
    }
    };
    function todoContent(obj){
        let content=document.createElement('div');


    let title=document.createElement('h1');
    title.textContent=obj.getTitle();
    
    let description=document.createElement('p');
    description.textContent=obj.getDescription();
    
    let date=document.createElement('span');
    date.textContent=obj.getDate();
    
    let periority=document.createElement('span');
    periority.textContent=obj.getPeriority();

    let completed=document.createElement('button');
    completed.textContent='Completed';
    completed.classList.add('completed-button');
    completed.addEventListener('click',()=>{
        obj.changeStatus();
        if(!obj.status){
        content.removeChild(completed);}
    })

    let status= document.createElement("label");
    status.textContent=obj.getStatus();
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(date);
    content.appendChild(periority);
    content.appendChild(status);
    content.appendChild(completed);
    content.classList.add('todo-card');
        return content;
    }
    export { createToDo,todoContent };