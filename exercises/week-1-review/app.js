// MONDAY REVIEW
// Think of problems/questions you've run into with the current assigments
// for the beginning of the review
// operators( <, >, <=, >=, &&, ||, !, !=, !==, ==, === )

// var peopleArr = [
//     {
//         name: "Mike",
//         age: 12,
//         gender: "male"
//     },
//     {
//         name: "Madeline",
//         age: 80,
//         gender: "female"
//     },
//     {
//         name: "Cheryl",
//         age: 22,
//         gender: "female"
//     },
//     {
//         name: "Sam",
//         age: 30,
//         gender: "male"
//     },
//     {
//         name: "Suzy",
//         age: 4,
//         gender: "female"
//     }
// ] 

// for(var i = 0; i < peopleArr.length; i++){
//     if(peopleArr[i].age >= 18){
//         console.log(peopleArr[i].name + " is old enough")
//     } else {
//         console.log(peopleArr[i].name + " is not old enough")
//     }
// }

// Terminal
// cd  - Navigating / changing directory
// ls  - List current directory
// pwd - present working directory
// rm  - file removal
// rm  -rf: Remove a directory
// mkdir: Make a directory
// touch: Make a file
// CLI: node/npm  git

// Github
// What is it 
// Upload/share code => Repository => VC
// git add -A, git commit -m "commit message", git push



// String, Number, Boolean, Array, Object, & Function

// var cord = {
//     color: "white",
//     type: "HDMI",
//     length: 3,
//     thingsItPlugsInto: ["wall", "computer", "tv"],
//     shippedFrom: {
//         city: "Some city",
//         state: "ut"
//     },
//     breaks: function(){
//         return "The freakin thing broke";
//     }
// }

// cord.length    // 3
// cord["length"] // 3

// console.log(cord.breaks()) // The freaking thing broke;


// Write for loop that counts 100 - 0, every 5th number
// 100, 95, 90, 85, etc...
// for(var i = 100; i >= 0; i -= 5){
//     console.log(i)
// }

// Create an array
// var arr = ["banana", "orange", "pineapple", "kiwi"]
// var str = "Some String"
    // console.log the 3rd item
        // console.log(arr[2]) // "pineapple"
        // console.log(str[3]) // "e"
    // using a for loop, console.log each item from the array
        // for(var i = 0; i < str.length; i++){
            // console.log(arr[i])
        //     console.log(str[i])
        // }



// Objects
    // Pass by value = boolean, number, string
    // Pass by reference = Arrays, Objects

// Passed by valued => Passes the literal primitive value, so re-assigning
// 'a' will not affect the string that 'b' is referring to.
    // var a = "string";
    // var b = a;
    // a = "another string";

    // console.log(a) // "another string"
    // console.log(b) // "string"

// Passed by reference => passes the literal value of the object so both
// variables now reference the same peice of data
    // var person = {
    //     name: "stevie",
    //     age: 2
    // }

    // var otherPerson = person
    // otherPerson.name = "brian"

    // console.log(person.name)      //  brian
    // console.log(otherPerson.name) //  brian


// Functions inside of Objects are referred to as Methods
// The 'this' keyword inside of an object refers to that object
    // var tiger = {
    //     species: "cat",
    //     name: "Elmer fudd",
    //     roar: function(){
    //         console.log(this.name + " says Roooooar, and he has " + this.legs + " number of legs")
    //     },
    //     legs: 4
    // }

    // tiger.roar()