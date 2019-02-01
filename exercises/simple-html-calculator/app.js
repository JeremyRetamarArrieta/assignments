let add = document.getElementById("add")
let form = document.nameForm




form.addEventListener("submit", function(e){
    e.preventDefault()
    
    //grab input value
    let userInput =form.alias.value

    //clear input value from submit button
    form.alias.value = ""

    //create element
    let h1Thing =document.createElement("h1");

    // Give the element content
    //text, atribuetes classes, eventlisenters
    h1Thing.textContent = userInput
    userInput = Number(userInput)
    // append child
    add.appendChild(h1Thing)
})
 