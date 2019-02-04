let add = document.getElementById("add")
let form = document.getElementsByName("add").value



add.addEventListener("submit", function(e) { 
    e.preventDefault()

    //grab input value

    let addingNumbers = Number(form.addNumber1.value) + Number(form.addNumber2.value) ;

    //clear input value from submit button
    form.add.value = ""

    //create element
    let h1Thing = document.createElement("h1");

    // Give the element content
    //text, atribuetes classes, eventlisenters

    h1Thing.textContent = addingNumbers
    
    // append child

    add.appendChild(h1Thing)
});