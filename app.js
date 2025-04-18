let container = document.querySelector(".container");
let inputBox = document.querySelector("#inputTask");
let inputBtn = document.querySelector("#addTask");
let taskText = inputBox.value
let taskWrap = container.querySelector(".bottom ul");
let addTask = ()=>{
  if (inputBox.value) {taskText = inputBox.value;
    inputBox.value = "";}
    else {
     alert("User has not entered a task")
     task.remove()
    }
  }
  let appendTask =()=>{
    addTask()
    let task = document.createElement("li")
  task.innerHTML = `
  <h3>${taskText}</h3> 
  <button class="delBtn">delete</button>`;
  taskWrap.appendChild(task)
}

inputBtn.addEventListener("click", appendTask);
taskWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    e.target.parentElement.remove();
  }
});