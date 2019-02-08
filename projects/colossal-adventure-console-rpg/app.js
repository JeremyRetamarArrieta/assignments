```ar ask = require('readline-sync')

/////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: []
}

////////////////////
// Game Functions //
function walk(){
     // random number between 1 - 4
     var chance = Math.floor(Math.random() * 4)
     // if number is 1 === attack
     if(chance === 1){
        console.log("ATTTAAACK")
     } else {
         console.log("Nothing happened, uneventful day really.")
     }
}


/////////////////
/// GAME INTRO //

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + " to my super awesome game")

var options = ["Walk"]


/////////////
// GAME LOOP
while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0){
       walk()
    } else if(userChoice === 1){

    }
}```

Message Input

Message js-january-2