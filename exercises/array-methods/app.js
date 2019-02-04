// Array Methods Exercise

// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.



let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function multi(){

    vegetables.pop();
    fruit.shift();
    let addNumberIndex = fruit.indexOf("orange")
    fruit.push(addNumberIndex);
    let veglength = vegetables.length
    vegetables.push(veglength);
    let food = fruit.concat(vegetables)
    console.log(food)
    food.splice(4,2)
    food.reverse();
    food.toString()
    console.log(food)
    
}
multi()

// console.log(fruit)
// console.log(vegetables)


// function plants(vegetables){
//     return vegetables.pop()
// }
// console.log(plants(vegetables))

//Find the index of "orange."
// let addNumIndex = fruit.indexOf("orange")

// function addIndexNum(){
//    console.log(addNumIndex)
// }
// addIndexNum()

// add that number to the end of the fruit array

// for (i =0; i<1; i++){
//     fruit.push(addNumIndex)
// }
// console.log(fruit)

//Use the length property to find the length of the vegetable array.

// for (i = 0; i < 1; i++){
//     console.log(vegetables.length)
// }

// let addNum2 = vegetables.length

//Add that number to the end of the vegetable array.

// for (i = 0; i < 1; i++){
//     vegetables.push(addNum2)
// }
// console.log(vegetables)


//Put the two arrays together into one array. Fruit first. Call the new Array "food".

// let food  = []

// function addfood(){
//     food.push(vegetables)
//     food.push(fruit)
// }
// addfood()

// console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.
