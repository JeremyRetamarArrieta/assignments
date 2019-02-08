// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.


// function fiveAndGreaterOnly(arr) {
// //code here
//     return arr.filter(function(num){
//         if (num > 5){
//             return num 
//         }
        
//     })  
// }
// //test

// console.log(fiveAndGreaterOnly([3,6,8,2]));

// // let adults = family.filter(person => person.age > 18)

// // Given an array of numbers, return a new array that only includes the even numbers.

// function evensOnly(arr){
//     return arr.filter(function(even){
//         if ( even % 2 === 0){
//         return even
//         }
//     })
// }

// console.log(evensOnly([3,6,8,2]));

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// function fiveCharactersOrFewerOnly(arr){
//     return arr.filter(function(fiveOrless){
//         if( fiveOrless <= 5){ 
//         }return fiveOrless
//     })
// }

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function memberOfIluminati(arr){
    // your code here
return arr.filter(function(person){
   return person.member
    })
  }
  // test
  console.log(memberOfIluminati([
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
  ]));
  
