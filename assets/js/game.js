
var fightOrSkip = function() {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money form playerMoney for skip
            playerInfo.playerMoney = playerInfo.money - 10;
            // shop();
            return(true);
        }
    };
    return(false);
}

var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        // ask player if they'd like to fight or skip using fightOrSkip
        if (fightOrSkip()) {
            // if true, leave fight break loop
            break;
        }

                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);

                console.log(
                    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " Now has " + enemy.health + " health remaining. "
                );
                //  check enemy's health 
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    // break;
                }
                else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);

                // Log a resulting message to the console so we know that it worked.
                    console.log(
                        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
                    );
                // check player health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    // break;
                }
                else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }

    }
};
    var startGame = function() {
        // reset player stats
        playerInfo.reset();

        for(var i = 0; i < enemyInfo.length; i++) {
            if (playerInfo.health > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    
                var pickedEnemyObj = enemyInfo[i];
                pickedEnemyObj.health = randomNumber(40, 60);
                fight(pickedEnemyObj);

                // if we're not at the last enemy in the array
                if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    // ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    // If yes, take them to the store() function
                    if (storeConfirm) {
                        shop();
                    }
                }
            }
            else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }   
        }
        endGame();
    };

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// start the game when the page loads
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
       // restart the game
         startGame();
     }
     else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    };
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try Again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// function to set name
var getPlayerName = function() {
    var name = "";

        while (name === "" || name === null) {
            name = prompt("What's your robot's name?")
        }
    return(name);
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7 ) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame();