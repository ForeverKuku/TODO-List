//SELECTING ELEMENTS FROM THE HTML TO THE JAVASCRIPT
const startButton = document.querySelector('#start-button');
const todoList = document.querySelector('.second-main-container');
const displayFormBtn = document.querySelector('#button');
const form = document.querySelector('.third-main-container');
const closeForm = document.querySelectorAll('#close');
const addBtn = document.querySelector('#add-btn');
const taskTitle = document.querySelector('#task-title');
const taskDiscription = document.querySelector('#task-discription');
const taskDate = document.querySelector('#task-date');
const title = document.querySelector('.title');
const todoNum = document.querySelector('#todo-num');

//EMPTY ARRAY TO HOLD ADDED TASKS
const todoArr = [];

//START BUTTON TO DISPLAY TODOLIST
startButton.addEventListener('click', e =>{
    
    todoList.style.display = 'block';
})


//DISPLAYING FORM FUNCTION TO DISPLAY THE FORM
function displayform(e){
    form.style.display = 'block';
}


//DISPLAY FORM BUTTON TO DISPLAY FORM
displayFormBtn.addEventListener("click", e =>{
    //CALLING THE DISPLAY FORM FUNCTION IN THE EVENT LISTENER
    displayform(e);
})

//CLOSING FORM FUNCTION TO CLOSE THE FORM
function closeform (e){
    form.style.display = "none";
}

//EVENT LISTENER TO CLOSE THE FORM ON THE BOTH CANCEL AND X BUTTON 
closeForm.forEach(el =>{
    el.addEventListener('click', e =>{
        closeform(e)
    })
})


//ADD BUTTON EVENT LISTENER TO ADD TASK IN THE TODO LIST
addBtn.addEventListener('click', e =>{
    let HTML = ` <div class="title edit-task"  >
    <div class="check">
        <input type="checkbox">
    </div>
    <div class="date">
        <h3>${taskDate.value}</h3>
    </div>
    <div class="task">
        <h3>${taskTitle.value} &nbsp; ${taskDiscription.value}</h3>
    </div>
</div>`

title.insertAdjacentHTML('afterend', HTML);
taskDate.value = '';
taskTitle.value = '';
taskDiscription.value = '';
todoArr.push("el");

todoNum.textContent = todoArr.length;
closeform(e);
console.log(todoArr.length)

})




        
            





