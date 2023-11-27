const enterButton = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const currentDateButton = document.querySelector('#current-date');
const showDateContainer = document.querySelector('.Show-date-container');






enterButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = document.querySelector("#new-todo");
    const newItem = document.createElement('li');
    const deleteItemButton = document.createElement('button');
    deleteItemButton.innerText = "Delete";
    newItem.innerText = newTodo.value;
    list.appendChild(newItem);
    newItem.appendChild(deleteItemButton);




    deleteItemButton.addEventListener("click", () => {
        list.removeChild(newItem);
    })

})


currentDateButton.addEventListener("click", () => {

    const currentTime = document.createElement('h1');
    currentTime.classList.add("current-date");
    currentTime.innerText = Date();    
    if (showDateContainer.contains(document.querySelector(".current-date"))){
        showDateContainer.removeChild(document.querySelector(".current-date"));
        // body.removeChild(currentTime);
    }
    showDateContainer.appendChild(currentTime);

    
})






