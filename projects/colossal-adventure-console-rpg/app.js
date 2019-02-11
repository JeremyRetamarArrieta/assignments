var ask = require('readline-sync')
// /////////////////////
// // Global variables //
var player = {
    dps: 0.5,
    name: '',
    health: 100,
    inventory: []
}

// var items = [
//     {gold: 10},
//     {silver: 7},
//     {copper: 3},
//     {emerald: 20},
//     {sapphire: 25},
// ]
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

// // //enemy should drop item randomly



enemies = ['Fred Fred Fred Burger' , "Lord Moldy Butt", "Tyler Durdan", "Captain Jack Sparrow"]
player.name = ask.question('Champion? What is your name?');

console.log('Welcome ' + player.name + '!');


// var adventureMode = function() {
// 	var self = this;
// 	var enemy;
// 	var randomEnemy = function() {
// 		var randomInt = Math.floor(Math.random() * 6 )
// 		enemy = enemies[randomInt];
// 		return enemy;
//     };
    
//     this.user = player.name;
// 	this.userPlaying = true;
// 	this.userHp = 100;
// 	this.enemyHp = 50;
// 	this.enemyIsActive = null;
//     this.enemyCount = 1;
//     this.enemyItem = Math.floor(Math.random(items) * 5)
    
//     this.userChoice = function () {
        var action = ask.question('What do you wanna do? Press W to go for a walk, press S to sleep in or d for dance:')
        // var userDPS = Math.floor(Math.random() * (40 - 20 + 1) + 25);
        switch(action) {
            
            case "d": console.log("You rocked the universe so well it has rewarded you with 10hp.")
            user.Hp + 10;
            break

            case "s": console.log("You just went night night ninja")
            break
            
            case "w": function walk(){
                
                var chance = Math.floor(Math.random() * 4)
                // if number is 1 === attack
                if(chance === 1){
                   console.log(" Something decked you in the face !")
                   run()

                }else {
                    console.log(" Crickets chirpping.")
                    setTimeout(function(){
                        console.log('uneventful day');
                    }, 2000);
                }
            }

        } walk()
            





//     function run(){
//      var randomNum = Math.floor(Math.random() * 3 )
//      if( randomNum == 1 ){
//         console.log("Run run run as fast as you can you can't catch me.")
//         setTimeout(function(){
//             console.log(' Ran away from a fight? You are a joke.');
//         }, 2000);
//         break
//          //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//      } else {
//          console.log("Uh oh...")
//          this.enemyAction = function() {
//             if(self.userIsActive === true && self.enemyHp > 0) {
//                 var enemyDamagePTS = Math.floor(Math.random() * 25);
//                 self.userHp -= enemyDamagePTS;
//                 console.log(enemy + ' farts in your face ' +  enemyDamagePTS + 'its super effective');
    
//                 if(self.userHp <= 0) {
//                     self.userIsActive = false;
//                     console.log(enemy + ' just murdered your face off ' + self.user + 'You DIED');
//                 }
    
//             } else if (self.enemyHp <= 0) {
//                 self.enemyIsActive = false;
//                 self.enemyCount++;
//                 console.log(self.user + ' you knocked ' + enemy + 'the fudge out');
//             }
//         };
    
//         this.enemyRespawn =  function() {
//             self.enemyIsActive = true;
//             self.enemyHp = 50;
//         };
    
//         this.attackProcess = function() {
//             if(self.enemyIsActive) {
//                 while(self.enemyHp > 0 && self.userIsActive === true) {
//                     self.userAction();
//                     self.enemyAction();
//                 }
//             }
//         };

//         this.fight = function() {
//             self.enemyIsActive = true;
//             readlineSync.ask('You just got caught up in a brawl. Press a to attack or r to run.');

//             switch(playAction){
//                 case "a": = randomEnemy();

//             console.log('walk a walk a walk a walk');
//             console.log('By the Gods a ' + enemy + ' has appeared');
//             self.attackProcess();
    
//             while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
//                 console.log('==============================================');
// //                readlineSync.keyIn('Press any key to walk: ');
//                 randomEnemy();
//                 console.log('Walking......');
//                 console.log('Prepare to die warrior! , a ' + enemy + ' challenges you.');
//                 self.enemyRespawn();
//                 self.attackProcess();
//             }
//             }

//             randomEnemy();
//             console.log('walk a walk a walk a walk');
//             console.log('By the Gods a ' + enemy + ' has appeared');
//             self.attackProcess();
    
//             while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
//                 console.log('==============================================');
// //                readlineSync.keyIn('Press any key to walk: ');
//                 randomEnemy();
//                 console.log('Walking......');
//                 console.log('Prepare to die warrior! , a ' + enemy + ' challenges you.');
//                 self.enemyRespawn();
//                 self.attackProcess();
//             }
    
//             if (self.enemyIsActive === false) {
//                 console.log(self.user + ' Your power level its its over 9,000! You did it! You destroyed the Gang of Poka Dot Rasins');
//             }
//         };
        
//         this.fight();
//     };
//  }

// adventureMode()