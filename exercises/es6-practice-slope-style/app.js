function collectAnimals(...collectAnimals) {  
    return collectAnimals
}



console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return food = {
        fruit, 
        sweets, 
        vegetables}
    
}

//Use destructuring to fill in the blanks and use the property names as variables:

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))


const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

object = vacation

const {location, duration} = object

function parseSentence(){
  return `We're going to have a good time in ${location} for ${duration}`
}


console.log(parseSentence(vacation))

