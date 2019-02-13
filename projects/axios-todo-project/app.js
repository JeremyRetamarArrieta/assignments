//get function
var todoList = document.getElementById('todo-container')

axios.get("https://api.vschool.io/jeremyretamararrieta/todo").then(function(response){
    var todos = response.data
    listTodos(todos)

}).catch(function(error){
    console.log(error)
})


function listTodos(todos){
    for(var i = 0; i < todos.length; i++){
        var title = document.createElement('h1')
        title.textContent = todos[i].title
        todoList.appendChild(title) 
     }
}
//take user input as a command
function takeUserInput(input){

}

//separate separate commands to other functions





//post function
axios.post("https://api.vschool.io/jeremyretamararrieta/todo")
function createPost(){
    
}

//put function


//delete function