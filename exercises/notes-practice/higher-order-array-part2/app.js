// Higher Order Array Methods part 2
// Method   // Returns     // What is it used for
// map      - new array    // Specific information from data 

// filter   - new array    // Create condensed data from other data

// forEach  - NOTHING      // for loop - can't specify start or end point


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////////
every    - Boolean      // Will return true if every item in arr passes our criteria
var allEvens = numbers.every(function(number){
    if(number % 2 === 0){
        return number
    }
})
console.log(allEvens) // false

// ////////
// some     - Boolean      // Will return true if at least 1 item in the arr passes our criteria
var atLeast1EvenNumber = numbers.some(function(number){
    if(number % 2 === 0){
        return number
    }
})
console.log(atLeast1EvenNumber) // true


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ////////
// find       -  returns an Obj/number/string - finds the first instance of the thing you are looking for   
var foundNum = numbers.find(function(num){
    return num === 7
    // if(num === 7){
    //     return num
    // }
})
console.log(foundNum)

// ////////
// findIndex  -  returns index number of thing we're looking for
var foundNumIndex = numbers.findIndex(function(num){
    return num === 7
    if(num === 7){
        return num
    }
})
console.log(foundNumIndex)


var numbers = [5, 20, 44, 0, 38, 38, 24, 556, 32, 53, 53, 53]
////////
//sort
var sorted = numbers.sort(function(a, b){
    return  a - b
})
console.log(sorted)

//////////
// reduce   - Returns any data type you want, but will default to the data type you give it
                // if one isn't stated as the 2nd argument.
var total = numbers.reduce(function(final, num){ 
    return final += num
}, 0)

console.log(total)

var numbers = [5, 20, 44, 0, 38, 38, 24, 556, 32, 53, 53, 53]

var numCountObj = numbers.reduce(function(finalObj, num){
    if(!finalObj[num]){ // finalObj."5"    { "5": 1, "20": 1, "38": 2 }
        finalObj[num] = 1
    } else {
        finalObj[num]++
    }
    return finalObj
}, {})

console.log(numCountObj)
