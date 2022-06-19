//NAVBAR SCRIPT
var menu = document.querySelector(".menu-box");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  navbar.classList.toggle("show");
});

//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-lists");
const filterOption = document.querySelector(".filter-todo");

//eventListeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodoList);

//functions

// ADD EVENT FUNCTION
function addTodo(event) {
  //prevent from submittimg
  event.preventDefault();
  if (todoInput.value !== "") {
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI Tag
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-items");
    todoDiv.appendChild(newTodo);
    //create Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to main Tag
    todoList.appendChild(todoDiv);
    //clear Input box
    todoInput.value = "";
  } else {
    alert("Please Fill Add Task.......");
  }
}
// DELETE CREATED TODODIV
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    ans = confirm("You want to delete this ? ");
    if (ans) {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
  }
  //CHECK MARK- COMPLETED
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//FILTERATION OF  TASKS
function filterTodoList(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
