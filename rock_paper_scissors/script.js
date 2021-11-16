let computerScore = 0;
let playerScore = 0;
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

    if (playerSelection === computerSelection) {
        console.log("Tie round!")
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log(`${computerSelection} beats ${playerSelection}, computer wins this round!`)
        computerScore++;
    }
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        console.log(`${playerSelection} beats ${computerSelection}, player wins this round!`)
        playerScore++;
    }

}
//calling playerSelection() to prompt for user input
const playerMove = playerSelection();
//calling computerSelection() to select a random array element from play
const computerSelection = computerPlay();

function game() {
    playRound(playerMove, computerSelection);
}
console.log(game());

