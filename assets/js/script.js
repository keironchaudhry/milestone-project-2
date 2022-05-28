
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

document.getElementById("rock-button").onclick=playerRock;
document.getElementById("paper-button").onclick=playerPaper;
document.getElementById("scissors-button").onclick=playerScissors;
document.getElementById("lizard-button").onclick=playerLizard;
document.getElementById("spock-button").onclick=playerSpock;

/**
 * Function for player clicking "rock"
 */
function playerRock() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "rock");
    alert("You picked rock!");
}

/**
 * Function for player clicking "paper"
 */
function playerPaper() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "paper");
    alert("You picked paper!");
}

/**
 * Function for player clicking "scissors"
 */
function playerScissors() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "scissors");
    alert("You picked scissors!");
}

/**
 * Function for player clicking "lizard"
 */
function playerLizard() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "lizard");
    alert("You picked lizard!");
}

/**
 * Function for player clicking "spock"
 */
function playerSpock() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "spock");
    alert("You picked spock!");
}

/**
 * Function for the basic AI to make a choice of hand
 */
function randomChoice() {
    let randomNumber = Math.random();
    let computerChoice = "rock";
    if (randomNumber >= 0.1 < 0.2) {
        computerChoice = "paper";
    } else if (randomNumber >= 0.3 < 0.5) {
        computerChoice = "scissors";
    } else if (randomNumber >= 0.5 < 0.7) {
        computerChoice = "lizard";
    } else if (randomNumber >= 0.7 < 0.9) {
        computerChoice = "spock";
    } 

    return computerChoice;
}
/**
 * Function for determining whether Player or AI has won
 */
function checkWinner() {

}

/**
 * Function for increasing player score
 */
function incrementPlayerScore() {
    playerScore++
}

/**
 * Function for increasing AI score
 */
function incrementComputerScore() {
    computerScore++
}
