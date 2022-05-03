class Todo {
    constructor(id, title, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }
}

let todoButton = document.getElementById("add");
let todoInput = document.querySelector(".todo-input");
let todos = [];
let id = 0;



function addTodo() {
    const title = document.getElementById("title").value;
    const todo = new Todo(id, title);
    todos.push(todo);
    id++;

    // console.log(todos);
  }
  todoButton.addEventListener("click", addTodo);

  document.getElementById("add").addEventListener("click", function () {
    addTodo();
    console.log(todos);
    draw();
  });

  const todoContainer = document.querySelector(".todo-container");
  function draw() {
    todoContainer.innerHTML = "";
    todos.forEach((item) => {
      const list = `
          <div class="listBox" data="${item.id}">
              <div class="listText">${item.title}</div>
              <button class="trash-btn" ><i class="fas fa-check"></i></button>
              <button class="complete-btn" ><i class="fas fa-trash"></i></button>
              
              
              <i id="delete" onclick="deleteItem(this)" class="fa-solid fa-circle-xmark"></i>
          </div>
      `;
      todoContainer.innerHTML += list;
    });
  }