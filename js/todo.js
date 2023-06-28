const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

JSON.parse(localStorage.getItem(TODOS_KEY));

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//json으로 변경하여 저장. 
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
}


function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "";
    button.addEventListener("click", deleteToDo);
    button.classList.add("btn-close");
    li.appendChild(span);
    li.appendChild(button);
    li.classList.add("list-group-item");
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoOjb = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoOjb);
    paintToDo(newToDoOjb);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { //savedToDos 가 있으면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}

