// Write an if statement that prints "is greater than" if 5 is greater than 3
// Write an if statement that prints "is the length" if the length of "cat" is 3
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.


let time = 3

if (5<3){
    console.log("is greater than");
}

if ("cat" == 3){
    console.log("is the length");
}

if ("cat" == "dog"){    
}   else {
console.log("not the same");
}
//1. Using the below object, write an if statement that prints 
//<theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), 
//and the opposite if they are not older than 18.

var person = {
    name: "Bobby",
    age: 12
  }
  if (person.age > 18){
      console.log("not")
  } else {
      console.log("old enough")
  }
//Using that same object, only allow them into the movie if their name starts with "B"

if (person.name[0] === "B"){
    console.log("allowed into movie")
}
//Using that same object, only allow them into the movie 
//if their name starts with "B" and they are older than 18.

if (person.name[0] === "B" && person.age > 18){
    console.log("allowed into movie")
} else{
    console.log("not allowed into movie")
}



//Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if ( 1 === 1){
    console.log("strict")
}  else if  ( 1 == "1"){
    console.log("loose")
}   else{
    console.log("not equal at all")
}

//Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
//OR!!!  3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if ( 1 <= 2 && 2 == 4 || 3 * 4 > 10 && 5 + 10 > 10){
    console.log("yes")
}

if (typeof "dog"){
    console.log(typeof "dog")
}
// check this one with teacher
if (true){
    console.log(typeof true)
}

if (typeof x){
    console.log(typeof x)
}
    

if ("u" > 6){
    console.log("greater than")
}   else{
    console.log("not greater than")
}

//Write a ternary statement that console.logs whether a number is odd or even. For example:

var myNum = 10;
myNum%2 >= 0 ? console.log("even") : console.log("odd");
