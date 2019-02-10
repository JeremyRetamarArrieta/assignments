// /////////////////////
// // Global variables //
var player = {
    dps: 0.5,
    name: '',
    health: 100,
    inventory: []
}
enemiesNames = ['Fred Fred Fred Burger' , "Lord Moldy Butt", "Tyler Durdan", "Captain Jack Sparrow"]

// array object for items

var items = [
    {gold: 10},
    {silver: 7},
    {copper: 3},
    {emerald: 20},
    {sapphire: 25},

]

function getRandomItem(){
   var randomItem = Math.floor(Math.random() * 5 )
   //console.log(randomItem)
   var pushItem = items[randomItem]
   //console.log(pushItem)
   return player.inventory.push(pushItem)
    
} 

getRandomItem()
console.log(player.inventory)
// // itemDropped = [getRandomItem()]

// //randomly generated enemies
// var enemyStorage = [];
//     for (var i = 0; i > enemy;i++){
//         var enemy = {
//         dps: 1,
//         name: "",
//         health: 50,
//         itemDrop: itemDropped
//     }
// }

// var newEnemy = Enemy




// //enemy should drop item randomly






// let ask = require('readline-sync')

// player.name = ask.question('Champion? What is your name?');

// console.log('Welcome ' + player.name + '!');




// // ////////////////////
// // // Game Functions //
// function walk(){
//      // random number between 1 - 4
//      var chance = Math.floor(Math.random() * 4)
//      // if number is 1 === attack
//      if(chance === 1){
//         console.log("ATTTAAACK")
//      } else {
//          console.log("Nothing happened, uneventful day really.")
//      }
// }


// function walk(){
//     //ask user to push "w" to walk
//      if (user pushed w){
//          if(1 in 4){
//              fight();
//          } else {
//              //tell user they didn't run into a monster
//              //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//          }
//      } else {
//          //tell user what's in their inventory, and their health, and then tell them to push w to walk
//  }
 
//  function run(){
//      if(1 in 2){
//          //tell user that they successfully got away and can continue walking
//          //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//      } else {
//          //tell user they were not able to run
//          //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
//  }
 
//  function fight(){
//      ask user to either fight or run
//      enemyCreation()
//      if (user is trying to run){
//          run()
//      } else {
//          attackEnemy
//      }
//  }
 
//  //****you get the idea****
 
//  function attackEnemy(){
 
//  }
 
//  function enemyAttack(){
 
//  }
 
//  function die(){
 
//  }
 
//  function enemyDie(){
 
//  }


// // /////////////////
// // /// GAME INTRO //
// //ask user for name and give greeting
// player.name = ask.question("What is your name? ");
// console.log("Welcome " + player.name + " to my super awesome game")

// var options = ["Walk"]


// // /////////////
// // // GAME LOOP
// while(player.health > 0){
//     var userChoice = ask.keyInSelect(options, "What would you like to do? ")
//     if(userChoice === 0){
//        walk()
//     } else if(userChoice === 1){

//     }
// }