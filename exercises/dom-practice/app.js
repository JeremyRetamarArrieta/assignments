


let headerOne = document.getElementById("headerOne")
console.log(headerOne)

// give the element some content
    headerOne.textContent = "hello world"
    // my.innerHtml = "<h1>hello world<h1>"
    // Placing that element on the DOM
    let conatiner = document.getElementById('container')
    conatiner.appendChild(myH1)

let headerTwo = document.createElement("headerTwo")
    headerTwo.textContent = "why hello there"
    let otherOne = document.getElementById("otherOne")
    otherOne.appendChild(headerTwo)

let myImg = document.createElement("img")
myImg.setAttribute("src", "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80")
container.appendChild(myImg)