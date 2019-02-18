//get function
const todoListContainer = document.getElementById('todolist-container')
const todoForm = document["add-todo-form"]

// const toDelete = document.getElementById

// Reuseable function to get our Todos from the database
function getData(){
    axios.get("https://api.vschool.io/jeremyretamararrieta/todo").then(res => {
        const todos = res.data
        // Send the data to our function so it can print the todos to the DOM
        listTodos(todos)
    }).catch(err => console.log(err))
}

function listTodos(todosArr){
    for(let i = 0; i < todosArr.length; i++){
        // Make it show on the DOM
        // Create Elements
        const todoContainer = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement("h2");
        const price = document.createElement("h3");
        const imgUrl = document.createElement('img');
        
        const buttonX = document.createElement("button");

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.checked = todosArr[i].completed;




        // Edit the element / Give it content
        todoContainer.classList.add("todo-container")
        title.textContent = todosArr[i].title
        buttonX.textContent = "delete"
        price.textContent = todosArr[i].price
        description.textContent = todosArr[i].description
        todoContainer.toDoId = todosArr[i]._id
        imgUrl.setAttribute("src", todosArr[i].imgUrl)
        // EVENT LISTERNER FOR CHECKED BOX
        checkBox.addEventListener('change', function (e){
            console.log(e.target.parentNode.toDoId)
            const updates = {
                completed: e.target.checked
            }
           axios.put(`https://api.vschool.io/jeremyretamararrieta/todo/${e.target.parentNode.toDoId}`, updates).then(res => {
            todoListContainer.innerHTML = ""
            getData()
           })     
        })
        //event listener for button
        buttonX.addEventListener("click", function (e){
            e.target.click

        axios.delete(`https://api.vschool.io/jeremyretamararrieta/todo/${e.target.parentNode.toDoId}`).then(res =>{
        getData()
        }).catch(err => console.log(err))

        })

        // if the current todo is completed, make the title have a line-through
        if(todosArr[i].completed){
            title.style.textDecoration = "line-through"
        }
        
        // Append it to the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(checkBox)
        todoContainer.appendChild(description)
        todoContainer.appendChild(imgUrl)
        todoContainer.appendChild(price)
        todoContainer.appendChild(buttonX)
        todoListContainer.appendChild(todoContainer)
    }
}

// FORM EVENT LISTENER FOR DOING OUR POST REQUEST TO THE API
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Generate newTodo obj
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    // Reset the form value to be empty
    todoForm.title.value = ""
    todoForm.description.value =""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""


    
    
    //////////
    // POST //
                // URL for POST                     // Object we are sending to be added
    axios.post("https://api.vschool.io/jeremyretamararrieta/todo", newTodo).then(res => {
        // Not necessary, but this is a way you can clear the DOM and re-print the new data
        todoListContainer.innerHTML = ""
        getData()
        // the .catch is ensure that any issues/errors in our post request are shown in the console.
    }).catch(err => console.log(err))


   
})  


// Calling getData() on page load so our axios.get goes out right away.

getData()
