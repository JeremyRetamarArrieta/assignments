var ask = require('readline-sync')
// /////////////////////
// // Global variables //
var player = {
    dps: 50,
    name: '',
    userHP: 100,
    inventory: [],
    score: 0
}

var items = [{
        name: "gold",
        value: 10

    },
    {
        name: "silver",
        value: 7,
    },
    {
        name: "copper",
        value: 3
    },
    {
        name:"emerald",
        value: 20
    },
    {
        name: "sapphire",
        value: 25
    },
]

//enemys
var enemyStorage = [{
        name: 'Fred, Fred Ferd Burger',
        enemyHP: 35,
        enemyAttack: 30,
    },
    {
        name: "Lord Moldy Butt",
        enemyHP: 45,
        enemyAttack: 30,
    },
    {
        name: "Tyler Durdan",
        enemyHP: 90,
        enemyAttack: 40,
    },
    {
        name: "Captain Jack Sparrow",
        enemyHP: 90,
        enemyAttack: 40,
    },
    {
        name: "007",
        enemyHP: 50,
        enemyAttack: 35,
    }
]

//randomly generated enemies

function enemySummon() {
    var summonChance = Math.floor(Math.random() * enemyStorage.length)
    var summonedEnemy = enemyStorage[summonChance]
    console.log(summonedEnemy)
    return summonedEnemy
}

player.name = ask.question(' Welcome to the world of Narnia...Champion? What is your name? ');

console.log('Welcome ' + player.name + ' !');

if (player.name) {
    walkSequence()
}

//     this.userChoice = function () {

function walkSequence() {
    var action = ask.question(' What do you wanna do? Press W to go for a walk, press S to sleep in, press P for inventory or D for dance: ')
    switch (action) {
        case "d":
            console.log(" You rocked the universe so well it has rewarded you with 10hp. ")
            player.userHP += 10;
            walkSequence()
            break

        case "s":
            console.log(" You just went night night ninja ")
            walkSequence()
            break

        case "w":
            attack()
            break
        case "p":
            checkInventory()
            break
        default:
            walkSequence()
            break

    }
}

function attack() {
    var chance = Math.floor(Math.random() * 3)
    // if number is 1 === attack
    if (chance === 1) {
        console.log(" Something decked you in the face !")
        playerChoice();

    } else if (chance != 1) {
        console.log(" Crickets chirpping.")
        setTimeout(function () {
            console.log('uneventful day')
            walkSequence();
        }, 2000)
    }
}

function fight() {
    var enemy = enemySummon();
    // console.log(enemy)
    if (enemyStorage.length === 0) {
        return ( " " + player.name + " won the game with " + player.score + " points.")
    } else {
        while (player.userHP > 0) {

            player.userHP -= enemy.enemyAttack;

            enemy.enemyHP -= player.dps;

            if (enemy.enemyHP <= 0) {
                console.log(" You knocked " + enemy.name + " the **** out!")
                var index = enemyStorage.findIndex(each => each.name === enemy.name);
                enemyStorage.splice(index, 1);
                getRandomItem()
                console.log(player.inventory)
                return walkSequence()
            }
        }
        console.log(" You DIED! ")
    }
}

// enemy should drop item randomly

function getRandomItem() {
    var randomItem = Math.floor(Math.random() * items.length)
    var pushItem = items[randomItem]
    player.score += pushItem.value
    return player.inventory.push(pushItem) 

}

function playerChoice() {
    var randomNum = Math.floor(Math.random() * 3)
    var action = ask.question("a for attack, r for run")
    console.log(action)
    switch (action) {
        
        case "a":
            fight()
            break

        case "r":
            // (randomNum === 1)
            run()
            break
    }

};

function run() {
   // chance = Math.floor(Math.random()* 2)
   // if ( chance === 0){  
    console.log("Run run run as fast as you can you can't catch me.")
    setTimeout(function () {
        console.log(' Ran away from a fight? You are a joke.');
        walkSequence()
        }, 2000);
    }
    
//}



function checkInventory(){
        console.log(player.inventory)
    walkSequence()
}