// getting variables for reading input
let inputBox = document.querySelector("#inputTask");
let inputBtn = document.querySelector("#addTask");
let taskWrap = document.querySelector(".bottom ul");
let task;
let tasks = JSON.parse(localStorage.getItem("tasks"))||[];
let readTask = () => {
  inputBox.value
    ? ((task = inputBox.value), (inputBox.value = ""), tasks.push(task),
localStorage.setItem("tasks", JSON.stringify(tasks)))
    : alert("please enter a task");
};

tasks.forEach((item)=>{
  let li = document.createElement("li");
  li.innerHTML = `
  <h3>${item}</h3> 
  <button class="delBtn">delete</button>`;
  taskWrap.appendChild(li)
});
inputBtn.addEventListener("click", readTask);
// 

taskWrap.addEventListener("click",
  (e)=> {
    if (e.target.classList.contains("delBtn")){
let li = e.target.parentElement;
let  tasktext = li.querySelector("h3").innerHTML;
let index = tasks.indexOf(tasktext);
if (index>-1){tasks.splice(index,1)}
localStorage.setItem("tasks",JSON.stringify(tasks))
li.remove()
    }
  }
)


