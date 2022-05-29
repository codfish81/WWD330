import { readFromLS, writeToLS } from "./ls";
import { qs, onTouch } from "./utilities";

const todoList = null;

export default class Todos{
    constructor(element, key){
        this.key = key;
        this.element = qs(element);
        this.listTodos();
    }

    addTodos() {
        const task = qs('#addTask')
        if(task.value != ''){
            this.listTodos();
        }
        task.value = '';
    }

    listTodos(){
        this.renderTodoList(todoList, this.element);
    }

    completeTodo(){

    }

    removeTodo(){
        this.renderTodoList();
    }

    filterTodos(){
        
    }
}

function saveTodo(task, key){
    const theNewTodo = {id: new Date(), content: task, complete: false};
    todoList.push(theNewTodo);
    writeToLS(key, theNewTodo);
}

function getTodos(key){
    if(todoList === null){
        todoList = readFromLS(key);
    }
    return todoList;
}

function renderTodoList(list, element){
    let elementList = "";
    if (list != []) {
        for (let l in list) {
            elementList +=`<li class="task"><input type="checkbox" class="check"><p>${element}</p><button class="remove">X</button></li>`;
        }
    }
    if (elementList != null) { 
        document.getElementById(this.element).innerHTML = elementList;
    }
    if (document.getElementById(this.element).innerHTML != "") {
        this.setRemove();
    }
}