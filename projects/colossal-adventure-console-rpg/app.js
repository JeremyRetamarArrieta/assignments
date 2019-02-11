// /////////////////////
// // Global variables //
var player = {
    dps: 0.5,
    name: '',
    health: 100,
    inventory: []
}

var items = [
    {gold: 10},
    {silver: 7},
    {copper: 3},
    {emerald: 20},
    {sapphire: 25},
]

var ask = require('readline-sync')

enemies = ['Fred Fred Fred Burger' , "Lord Moldy Butt", "Tyler Durdan", "Captain Jack Sparrow"]
player.name = ask.question('Champion? What is your name?');

console.log('Welcome ' + player.name + '!');

var adventureMode = function() {
	var self = this;
	var enemy;
	var randomEnemy = function() {
		var randomInt = Math.floor(Math.random() * 5 )
		enemy = enemies[randomInt];
		return enemy;
    };
	this.user = player.name;
	this.userPlaying = true;
	this.userHp = 100;
	this.enemyHp = 50;
	this.enemyIsActive = null;
    this.enemyCount = 1;
    
    this.userChoice = function () {
        var action = readlineSync.ask('What do you wanna do? Press W to go for a walk, press S to sleep in or d for dance:')
        // var userDPS = Math.floor(Math.random() * (40 - 20 + 1) + 25);
        switch(action) {
            case "s": console.log("You just went night night ninja")
            break
            case "w": function walk(){
                var chance = Math.floor(Math.random() * 4)
                // if number is 1 === attack
                if(chance === 1){
                   console.log(" Something decked you in the face !")
                }else {
                    console.log(" Crickets chirpping.")
                }
            }

        }
            
        }

    }
    



// array object for items



// function getRandomItem(){
//    var randomItem = Math.floor(Math.random() * 5 )
//    //console.log(randomItem)
//    var pushItem = items[randomItem]
//    //console.log(pushItem)
//    return player.inventory.push(pushItem)
    
// } 

// getRandomItem()
// console.log(player.inventory)

// // // itemDropped = [getRandomItem()]

// // //randomly generated enemies
// // var enemyStorage = [];
// //     for (var i = 0; i > enemy;i++){
// //         var enemy = {
// //         dps: 1,
// //         name: "",
// //         health: 50,
// //         itemDrop: itemDropped
// //     }
// // }

// // var newEnemy = Enemy




// // //enemy should drop item randomly






// // // /////////////////
// // // /// GAME INTRO //
// // //ask user for name and give greeting
// // player.name = ask.question("What is your name? ");
// // console.log("Welcome " + player.name + " to my super awesome game")

// // var options = ["Walk"]

// // // /////////////
// // // GAME LOOP
// while(player.health > 0){
//     var userChoice = ask.keyInSelect(options, "What would you like to do? ")
//     if(userChoice === w){
//        walk()
//     } else if(userChoice === 1){

//     }
// }




// // ////////////////////
// // // Game Functions //

//      // random number between 1 - 4
     


function walk(){
    //ask user to push "w" to walk
     if (){
         if(1 in 4){
             fight();
         } else {
             //tell user they didn't run into a monster
             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
         }
     } else {
         //tell user what's in their inventory, and their health, and then tell them to push w to walk
 }
 
 function run(){
     if(1 in 2){
         //tell user that they successfully got away and can continue walking
         //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
     } else {
         //tell user they were not able to run
         //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
 }
 
 function fight(){
     ask user to either fight or run
     enemyCreation()
     if (user is trying to run){
         run()
     } else {
         attackEnemy
     }
 }
 
//  //****you get the idea****
 
//  function attackEnemy(){
 
//  }
 
//  function enemyAttack(){
 
//  }
 
//  function die(){
 
//  }
 
//  function enemyDie(){
