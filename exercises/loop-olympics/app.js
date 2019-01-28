// Write a for loop that prints to the console the numbers 0 through 

//for (i=0; i<10; i++){
   // console.log(i)
//}
//Write a for loop that prints to the console 9 through 0.

// for (i=9; i>0; i--){
//     console.log(i)
// }

//Write a for loop that prints these fruits to the console.

// var fruit = ["banana", "orange", "apple", "kiwi"]
//     for(i = 0; i<fruit.length; i++){
//         console.log(fruit[i])
//     }

//Write a for loop that will push the numbers 0 through 9 to an array.

// let step=[]
// for (i=0; i<10; i++){
//     step.push(i)
// }   console.log(step)

//Write a for loop that prints to the console only even numbers 0 through 100.

// let i = 0
// for (i=0; i<101; i++){
//     if (( i % 2) === 0)
//     console.log(i)
// }

//Write a for loop that will push every other fruit to an array.
// let newArray = [];
// let fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i=0; i < fruit.length; i++){
//     if  (i % 2 === 0){
//         newArray.push(fruit[i])
//     }
// } console.log(newArray)

//Write a loop that will print out all the names of the people of the people array

// var peopleArray = [
//     {
//         name: "Harrison Ford",
//         occupation: "Actor"
//       },
//       {
//         name: "Justin Bieber",
//         occupation: "Singer"
//       },
//       {
//         name: "Vladimir Putin",
//         occupation: "Politician"
//       },
//       {
//         name: "Oprah",
//         occupation: "Entertainer"
//       }
//     ]

    // for (i = 0; i < peopleArray.length; i++){
    //     console.log(peopleArray[i].name)
    // }

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// let names = []
// let occupation =[]

// for ( i = 0 ; i < peopleArray.length ; i++){
//     names.push(peopleArray[i].name);
//     occupation.push(peopleArray[i].occupation);
// }   
// console.log(names)
// console.log(occupation)

//Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

// let array1 =[]
// let array2 =[]

// for (i=0; i <peopleArray.length; i++){
//     if ( i%2 === 0 ){
//         array1.push(peopleArray[i].name)
//         array2.push(peopleArray[i+1].occupation)
//     }
// }   console.log(array1)
//     console.log(array2)

//Create an array that mimics a grid like the following using for loops:

// let array = [[0,0,0]]

// for ( i=0; i < 2 ; i++ ){
//     array.push(array[i]);
// } console.log(array)

//2.Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

//doesn't work
// let emptyArray = [];
// let index = 0;

// for ( i = 0; i < 3; i++){
//     let array2 = [];
//     emptyArray.push(array2)
//     for ( j = 0; j < 3; j++){
//             array2em.push(index);
//         }
//    index++;
//     }
    
//  console.log(array2)

//does work
// let newArray = [];
// let index = 0;

// for (i = 0; i < 3; i++){
//     let newSubArray = [];
//     newArray.push(newSubArray)
//     for (j=0 ; j <3; j++){
//         newSubArray.push(index);
//     }
//     index++;
// }
// console.log(newArray)







