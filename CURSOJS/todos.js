let listElement  = document.querySelector('#app ul');
let inputElment  = document.querySelector('#app input');
let buttonElment = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || []

const renderTodos = () => {
    
    listElement.innerHTML = '' ; 
    
    for(todo of todos){
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        //excluir
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');

        let linkText = document.createTextNode('Excluir');
        
        todoElement.appendChild(todoText);

        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

const addTodo = () => {
    let todoText = inputElment.value;

    todos.push(todoText);
    inputElment.value = '';
    renderTodos();
    saveToStorage()
}

buttonElment.onclick = addTodo;

const deleteTodo = (pos) => {
    todos.splice(pos,1);
    renderTodos();
    saveToStorage()
}

const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}