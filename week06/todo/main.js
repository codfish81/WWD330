import Todos from "./todos";

let toDos = new Todos();
document.getElementsByTagName("addTask").addEventListener("click", toDos.addTodo());