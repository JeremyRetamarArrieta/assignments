// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

// John is the pet owner, and his name should be stored differently than the other names.

// const name = "John"
// var age = 101
// var pets = ["cat", "dog"]
// var petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// runForLoop()

// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(["rasins" , "yogurt"]))

 let mapVegetables = carrots.map => (carrots.type, carrots.name)

console.log(mapVegetables(["rasins" , "yogurt"]))

//  console.log(mapVegetables("zepper", "lime"))
