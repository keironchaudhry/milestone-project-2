document.getElementById("rock").onclick=playerRock;
document.getElementById("paper").onclick=playerPaper;
document.getElementById("scissors").onclick=playerScissors;
document.getElementById("lizard").onclick=playerLizard;
document.getElementById("spock").onclick=playerSpock;

/**
 * Function for player clicking "rock"
 */
function playerRock() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "rock");
}

/**
 * Function for player clicking "paper"
 */
function playerPaper() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "paper");
}

/**
 * Function for player clicking "scissors"
 */
function playerScissors() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "scissors");
}

/**
 * Function for player clicking "lizard"
 */
function playerLizard() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "lizard");
}

/**
 * Function for player clicking "spock"
 */
function playerSpock() {
    let computerChoice = randomChoice();
    checkWinner(computerChoice, "spock");
}

/**
 * Function for the basic AI to make a choice of hand
 */
function randomChoice() {
    let randomNumber = Math.random();
    let computerChoice = "rock";
    if (randomNumber >= 0.1 < 0.2) {
        computerChoice = "paper";
    } else if (randomNumber >= 0.4 < 0.6) {
        computerChoice = "scissors";
    } else if (randomNumber >= 0.6 < 0.8) {
        computerChoice = "lizard";
    } else if (randomNumber >= 0.8) {
        computerChoice = "spock";
    } 

    return computerChoice;
}

/**
 * Function for determining whether Player or AI has won
 */
function checkWinner(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {

        alert("A tie between both opponents!");

    } else if (

        (computerChoice == "rock" && playerChoice == "lizard") ||
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "paper" && playerChoice == "spock") ||
        (computerChoice == "scissors" && playerChoice == "lizard") ||
        (computerChoice == "scissors" && playerChoice == "paper") ||
        (computerChoice == "lizard" && playerChoice == "spock") ||
        (computerChoice == "lizard" && playerChoice == "paper") ||
        (computerChoice == "spock" && playerChoice == "rock") ||
        (computerChoice == "spock" && playerChoice == "scissors") 

    ) {

        incrementComputerScore();
        alert("Computer wins this round!");

    } else {

        incrementPlayerScore();
        alert("Player wins this round!");

    }
}

/**
 * Function for increasing player score
 */
function incrementPlayerScore() {
    let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldPlayerScore;
    if (oldPlayerScore === 5) {
        alert("Player has won the game. Game over.");
    } 
}

/**
 * Function for increasing AI score
 */
function incrementComputerScore() {
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldComputerScore;
    if (oldComputerScore === 5) {
        alert("Computer has won the game. Game over.");
    }
}

/**
 * Function for declaring the winner and loser
 */
/** function gameOver() {
// Function that limits amount of points to 10. 
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
// The first variable that reaches 10 has won. Declares this variable the winner.
    if (oldComputerScore === 5) {
        alert("Computer has won the game. Game over.");
        document.getElementById("computer-score").innerText = 0;
    } else (oldPlayerScore === 5); {
        alert("Player has won the game. Game over.");
        document.getElementById("player-score").innerText = 0;
    }
// Ends game and resets numbers. 
} **/