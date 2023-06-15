document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {      
   e.preventDefault();
   createTask(e.target.newTaskDescription.value);
   console.log(e.target.newTaskDescription.value);
  form.reset();
    });     

  });

function createTask(newTask) {
  let p = document.createElement("p");
  let button = document.createElement("button");
  button.addEventListener("click", removeTask);

  button.textContent = "Delete";
  p.textContent = `${newTask}`;
  p.appendChild(button);
  document.querySelector("#list").appendChild(p);
 }

function removeTask(e){
  e.target.parentNode.remove();
}
