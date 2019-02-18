// // Constructor Functions
// // Blueprint for an object(s)

// // We want a function that can create an object like thiscd
// // for every user that joins our site
//     var user = {
//         username: "buddy123",
//         email: "buddy@gmail.com",
//         age: 20
//     }

// // So we make this blueprint that allows you to send a username, email and age
// // , and what you get back is an object with those properties

// function User(username, email, age){
//     this.username = username;
//     this.email = email;
//     this.age = age;
//     this.speak = function(){
//         console.log("Hi my username is " + this.username)
//     }
// }

// console.log(User("jak","Speechsm@GrammarList.com",45))
// // The 'this' keyword inside of an object refers to the object it's being used in.
// // ex:
// var person = {
//     name: "joe",
//     speak: function(){
//         console.log(this.name) // instead of saying person.name.
//     }
// }

// // Using this.speak inside of the constructor function is not best practice because
// // a new version of `this.speak` is created everytime you make a new user.
// // So instead you can add the speak method to the 'User' prototype so all User
// // objects have access to use it
//     User.prototype.speak = function(){
//         console.log(this.username)
//     }


// // buddy and frank are 'instances' of our 'User' constructor
// // the 'new' keyword is required to let javascript know you are
// // 'instantiating' a User with some information.
//     // instantiate === instance.   buddy is an instance of User since it
//     // used User as it's blueprint

// var buddy = new User("buddy123", "buddy@gmail.com", 20)
// var frank = new User("frank123", "frank@gmail.com", 42)
// console.log(buddy.age) // 20
// console.log(frank.age) // 42
// buddy.age++
// console.log(buddy.age) // 21
// console.log(frank.age) // 42

// // Even though buddy and frank were created from the same blueprint
// // they are two separate objects and changing one does not affect the other.

// buddy.speak()
// frank.speak()




// ES6 practice

function printLastElement(arr){
    return arr[arr.length - 1]
}

const printLastElement = arr => arr[arr.length - 1]

function sum(a, b){
    return a + b
}

const sumES6 = (a, b) => a+b;
console.log(sumES6(3,5))

const onlyEvens = nums.filter(function(number){
    if (number % 2 === 0){
        return number
    }
})

const onlyEvensES6 = nums.filter(number => number % 2 === 0 ? true: false)
console.log(onlyEvensES6)

const totalCount = nums.reduce(function(final, num){
    return final += num
}, 0)

const totalCountES6 = nums.reduce((final, num)=> final += num, 0)
console.log(totalCountES6)