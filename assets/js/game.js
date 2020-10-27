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
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                }
            }

            // if player chooses to fight, then fight
            if (promptFight === "fight" || promptFight === "FIGHT") {
                // remove enemy's health by subtracting the amount set in the player's playerAttack variable 
                enemyHealth = enemyHealth - playerAttack;
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
                // remove player's health by subtracting the amount set in the enemy's enemyAttack variable
                playerHealth = playerHealth - enemyAttack;
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

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}