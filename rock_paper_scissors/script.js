//Array consisting of all moves in RPS
const play = ["Rock", "Paper", "Scissors"];
//declaring a random number equal to the length of the play array
let random = Math.floor(Math.random() * play.length);
//function that returns random element in play array
let computerPlay = () => {
    let move = play[random];
    return move.toLowerCase();
}

let playerSelection = () => {
    let move = prompt("Rock, Paper or Scissors?");
    return move.toLowerCase();
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("VICTORY!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("DEFEATED!");
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("Run that back");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("VICTORY!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("DEFEATED!");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("Run that back");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("VICTORY!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("DEFEATED!");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(`Player selected ${playerSelection} & Computer selected ${computerSelection}...`);
        console.log("Run that back");
    }
    else {
        console.log("WTF");
    }

}
//calling playerSelection() to prompt for user input
const playerMove = playerSelection();
//calling computerSelection() to select a random array element from play
const computerSelection = computerPlay();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    playRound(playerMove, computerSelection);
}
console.log(game());

