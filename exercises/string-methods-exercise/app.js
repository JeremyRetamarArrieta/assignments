//Make a function that will return any given string into all caps followed by the same string all lowercase.
//capilizeAndLowercase("Hello") // => "HELLOhello"

// function myfunc (mystring){
//     return (mystring.toUpperCase()+mystring.toLowerCase())
//     }
// console.log(myfunc("aposdijf"))

//Make a function that returns a number half the length, and rounded down. 
//You'll need to use Math.floor().

// function findMiddleIndex(string){
//     return Math.floor(string.length /2)
// }
// console.log(findMiddleIndex("illinois"))

//Make a function that uses slice() and the other functions you've written to return the first half of the string

// function returnFirstHalf(vax){
//     return vax.slice(0,vax.length /2)
// }
// console.log(returnFirstHalf("this is it"))


// Make a function that takes a string and returns that string where the first half is capitalized,
// and the second half is lower cased. (If the string length is odd,
// capitalize the shorter of the first half.)

// function one(variable){

//     if(variable.length%2 === 0 ){
//         console.log(variable.slice(0,variable.length /2).toUpperCase())
//         console.log(variable.slice(variable.length /2, variable.length).toLowerCase());
//     } else{
//         console.log(variable.slice(0, Math.floor(variable.length)).toUpperCase())
//         console.log(variable.slice(variable.length/2, variable.length).toLowerCase());
//     }
// }
// one("this is another string")