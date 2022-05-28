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
function checkWinner(computerChoice, playersChoice) {
    if (playersChoice === computerChoice) {

        alert("A tie between both opponents!");

    } else if (

        (computerChoice == "rock" && playersChoice == "lizard") ||
        (computerChoice == "rock" && playersChoice == "scissors") ||
        (computerChoice == "paper" && playersChoice == "rock") ||
        (computerChoice == "paper" && playersChoice == "spock") ||
        (computerChoice == "scissors" && playersChoice == "lizard") ||
        (computerChoice == "scissors" && playersChoice == "paper") ||
        (computerChoice == "lizard" && playersChoice == "spock") ||
        (computerChoice == "lizard" && playersChoice == "paper") ||
        (computerChoice == "spock" && playersChoice == "rock") ||
        (computerChoice == "spock" && playersChoice == "scissors") 

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
    let oldPlayerScore = parseInt(document.getElementById("player-score"));
    document.getElementById("player-score").innerText = ++oldPlayerScore;
}
/**
 * Function for increasing AI score
 */
function incrementComputerScore() {
    let oldComputerScore = parseInt(document.getElementById("computer-score"));
    document.getElementById("computer-score").innerText = ++oldComputerScore;
}
