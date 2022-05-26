
let buttons = document.getElementsByClassName("options");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let choices = ["rock", "paper", "scissors", "lizard", "spock"]; 

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    })
}

function runGame(playerChoice) {

let computerChoice = Math.floor(Math.random() * 5);
let results = checkWinner(choices[computerChoice], choices[playerChoice]);
playerWin(results);

}

function playerWin() {

}

function computerWin() {

}


function playerScoreIncrement() {
    
}

function computerScoreIncrement() {

}

