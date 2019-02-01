//declare divs

let containerOne = document.getElementById("containerOne")

let containerTwo = document.getElementById("containerTwo")

let containerThree = document.getElementById("containerThree")
//declare forms
let form = document.form
// Add submit events to the forms
form.addEventListener("submit", addNumberToDom)

function addNumberToDom(e){ 
    e.preventDefault()
    // Clear containter back to empty div
    containerOne.innerHTML = ""

    // change to a number
    // grab the input's value
    let inputOne = Number(form.goombas.value) * 5
    let inputTwo = Number(form.bobOmbs.value) * 7
    let inputThree = Number(form.cheepcheeps.value) * 11

    

    // Clear the user input after grabbing the value
    form.goombas.value = ""
    form.bobOmbs.value = ""
    form.cheepcheeps.value = ""
    

    // Create element
    let h1Goombas = document.createElement("h1");

    //Give the element content
    h1Goombas.textContent = inputOne + inputTwo + inputThree
    
    //Append child
    containerOne.appendChild(h1Goombas)
}
