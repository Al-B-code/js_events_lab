const enterButton = document.querySelector('#todo-form');
const list = document.querySelector('#list');


enterButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = document.querySelector("#new-todo");
    const newItem = document.createElement('li');
    newItem.innerText = newTodo.value;
    list.appendChild(newItem);
    console.log(enterButton);
})

