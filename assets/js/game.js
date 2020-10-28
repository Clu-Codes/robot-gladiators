var playerName = window.prompt("What is your player's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {

            //  alert players that they are starting the round
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
                // if yes, leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    //  subtract money from playerMoney for skip
                    playerMoney = Math.max(0, playerMoney - 10);
                    console.log("playerMoney", playerMoney);
                    break;
                }
            }

            // if player chooses to fight, then fight
            if (promptFight === "fight" || promptFight === "FIGHT") {
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerAttack - 3, playerAttack);
                enemyHealth = Math.max(0, enemyHealth - damage);

                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " Now has " + enemyHealth + " health remaining. "
                );
                //  check enemy's health 
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    break;
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerAttack - 3, playerAttack);
                playerHealth = Math.max(0, playerHealth - damage);

                // Log a resulting message to the console so we know that it worked.
                    console.log(
                        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
                    );
                // check player health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    break;
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }

            }

        else {
            window.alert("You need to choose a valid option. Try again!");
        }  
    }
}
    var startGame = function() {
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        // debugger;
        for(var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    
                var pickedEnemyName = enemyNames[i];
                enemyHealth = randomNumber(40, 60);
                fight(pickedEnemyName);

                // if we're not at the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health, decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack, decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "LEAVE":
        case "leave":
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

startGame();