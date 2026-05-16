const addbtn = document.getElementById('add-btn')
const editbtn1 = document.getElementById('edit-btn-1');
const editbtn2 = document.getElementById('edit-btn-2');
const deletebtn1 = document.getElementById('delete-btn-1')
const deletebtn2 = document.getElementById('delete-btn-2')

addbtn.onclick = function() {
    let taskInput = document.getElementById('task-input');
    let newTask = taskInput.value;
    var taskList = document.getElementById('task-list');
    var newList = document.createElement('li');
    newList.textContent = newTask;
    taskList.appendChild(newList);

}

editbtn1.onclick = function() {
    var taskText =document.getElementById('task-1-text');
    var newText = prompt('edit ur task:', taskText.textContent);

    if (newText !== null && newText.trim() !== '') {
        taskText.textContent = newText;
    }
}

editbtn2.onclick = function() {
    var taskText =document.getElementById('task-2-text');
    var newText = prompt('edit ur task:', taskText.textContent);

    if (newText !== null && newText.trim() !== '') {
        taskText.textContent = newText;
    }
}

deletebtn1.onclick = function() {
   var task1 = document.getElementById('task-1'); 
   task1.remove();

}

deletebtn2.onclick = function() {
   var task2 = document.getElementById('task-2'); 
   task2.remove();

}

