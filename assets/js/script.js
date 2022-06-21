// document.getElementById("rock").onclick=playerRock;
// document.getElementById("paper").onclick=playerPaper;
// document.getElementById("scissors").onclick=playerScissors;
// document.getElementById("lizard").onclick=playerLizard;
// document.getElementById("spock").onclick=playerSpock;
document.getElementById("reset").onclick=resetGame;

const options = document.querySelectorAll(".user-option");

    options.forEach((option) => {
        option.addEventListener("click", function() {
            const playerInput = this.textContent;
            document.getElementById("player-hand").textContent = playerInput;
        
        
            const computerOptions = ["🪨", "📄", "✂️", "🦎", "🖖🏽"];
            const computerInput = computerOptions[Math.floor(Math.random() * 5)];
            document.getElementById("computer-hand").textContent = computerInput;

            checkWinner(playerInput, computerInput);
})})

// /**
//  * Function for player clicking "rock"
//  */
// function playerRock() {
//     let computerChoice = randomChoice();
//     checkWinner(computerChoice, "rock");
//     document.getElementById("player-hand").innerText = "🪨";
// }

// /**
//  * Function for player clicking "paper"
//  */
// function playerPaper() {
//     let computerChoice = randomChoice();
//     checkWinner(computerChoice, "paper");
//     document.getElementById("player-hand").innerText = "📄";
// }

// /**
//  * Function for player clicking "scissors"
//  */
// function playerScissors() {
//     let computerChoice = randomChoice();
//     checkWinner(computerChoice, "scissors");
//     document.getElementById("player-hand").innerText = "✂️";
// }

// /**
//  * Function for player clicking "lizard"
//  */
// function playerLizard() {
//     let computerChoice = randomChoice();
//     checkWinner(computerChoice, "lizard");
//     document.getElementById("player-hand").innerText = "🦎";
// }

// /**
//  * Function for player clicking "spock"
//  */
// function playerSpock() {
//     let computerChoice = randomChoice();
//     checkWinner(computerChoice, "spock");
//     document.getElementById("player-hand").innerText = "🖖🏽";
// }

// /**
//  * Function for the basic AI to make a choice of hand
//  */
// function randomChoice() {
//     let randomNumber = Math.random();
//     let computerChoice = "rock";
//     document.getElementById("computer-hand").innerText = "🪨";
//     if (randomNumber >= 0.1 < 0.2) {
//         computerChoice = "paper";
//         document.getElementById("computer-hand").innerText = "📄";
//     } else if (randomNumber >= 0.4 < 0.6) {
//         computerChoice = "scissors";
//         document.getElementById("computer-hand").innerText = "✂️";
//     } else if (randomNumber >= 0.6 < 0.8) {
//         computerChoice = "lizard";
//         document.getElementById("computer-hand").innerText = "🦎";
//     } else if (randomNumber >= 0.8) {
//         computerChoice = "spock";
//         document.getElementById("computer-hand").innerText = "🖖🏽";
//     } 

//     return computerChoice;
// }

/**
 * Function for determining whether Player or AI has won
 */
function checkWinner(computerInput, playerInput) {
    if (playerInput === computerInput) {

        document.getElementById("game-alert").innerText = "Tie!";

    } else if (

        (computerInput == "🪨" && playerInput == "🦎") ||
        (computerInput == "🪨" && playerInput == "✂️") ||
        (computerInput == "📄" && playerInput == "🪨") ||
        (computerInput == "📄" && playerInput == "🖖🏽") ||
        (computerInput == "✂️" && playerInput == "🦎") ||
        (computerInput == "✂️" && playerInput == "📄") ||
        (computerInput == "🦎" && playerInput == "🖖🏽") ||
        (computerInput == "🦎" && playerInput == "📄") ||
        (computerInput == "🖖🏽" && playerInput == "🪨") ||
        (computerInput == "🖖🏽" && playerInput == "✂️") 

    ) {

        incrementComputerScore();

    } else {

        incrementPlayerScore();

    }
}

/**
 * Function for increasing player score
 */
function incrementPlayerScore() {
    let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldPlayerScore;
    document.getElementById("game-alert").innerText = "";

    if (oldPlayerScore === 10) {
        playerGameOver();
    }
}

/**
 * Function for increasing AI score
 */
function incrementComputerScore() {
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldComputerScore;
    document.getElementById("game-alert").innerText = "";

    if (oldComputerScore === 10) {
        computerGameOver();
    }
}

/**
 * Function for declaring game over when player wins
 */
function playerGameOver() {
    document.getElementById("game-alert").innerText = "Game over. Player has won!";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
}

/**
 * Function for declaring game over when computer wins
 */
 function computerGameOver() {
    document.getElementById("game-alert").innerText = "Game over. Computer has won!";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0; 
}

/**
 * Function for resetting the game to default
 */
function resetGame() {
    document.getElementById("game-alert").innerText = "";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0; 
    document.getElementById("player-hand").innerText = "";
    document.getElementById("computer-hand").innerText = "";
}

