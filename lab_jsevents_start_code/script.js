const enterButton = document.querySelector('#todo-form');
const list = document.querySelector('#list');
const completedList = document.querySelector('#completedList');
const currentDateButton = document.querySelector('#current-date');
const showDateContainer = document.querySelector('.Show-date-container');
const body = document.querySelector('body');



const createCheckbox = function(){
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.classList.add("complete");
    // checkbox.id = "id";
    return checkbox;
}


enterButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = document.querySelector("#new-todo");
    const newItem = document.createElement('li');
    newItem.classList.add("incomplete");

    const deleteItemButton = document.createElement('button');
    deleteItemButton.innerText = "Delete";

    const checkbox = createCheckbox();
    newItem.innerText = newTodo.value;
    list.appendChild(newItem);
    newItem.appendChild(deleteItemButton);
    newItem.appendChild(checkbox);


    checkbox.addEventListener("change", () => {
        newItem.classList.toggle("complete");
        newItem.classList.toggle("incomplete");
        if (completedList.contains(newItem)){
            list.appendChild(newItem);
            return;
        }
        if (list.contains(newItem)){
            completedList.appendChild(newItem);
            return;
        }
   

    })
    

    deleteItemButton.addEventListener("click", () => {
       newItem.parentNode.removeChild(newItem);
    })

})


// currentDateButton.addEventListener("click", () => {

//     const currentTime = document.createElement('h1');
//     currentTime.classList.add("current-date");
//     currentTime.innerText = Date();    
//     if (showDateContainer.contains(document.querySelector(".current-date"))){
//         showDateContainer.removeChild(document.querySelector(".current-date"));
//         // body.removeChild(currentTime);
//     }
//     // showDateContainer.appendChild(currentTime);
//     body.insertBefore(currentTime,document.body.firstChild);
// })

currentDateButton.addEventListener("click", () => {
    // Remove any existing elements with the class "current-date"
    const existingElement = document.querySelector(".current-date");
    if (existingElement) {
        existingElement.parentNode.removeChild(existingElement);
    }

    // Create a new h1 element
    const currentTime = document.createElement('h1');
    currentTime.classList.add("current-date");
    currentTime.innerText = Date();

    // Insert the new h1 element at the top of the body
    document.body.insertBefore(currentTime, document.body.firstChild);
});






