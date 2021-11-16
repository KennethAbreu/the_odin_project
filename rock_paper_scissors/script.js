let computerScore = 0;
let playerScore = 0;
let round = 0;
const play = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * play.length);

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
        round++;
    }
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        console.log(`${playerSelection} beats ${computerSelection}, player wins this round!`)
        playerScore++;
        round++;
    }

}
function game() {
    playRound(playerSelection(), computerPlay());
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
    console.log(`Round: ${round}`);
}
while (round < 6) {
    console.log(game());
}
if (playerScore >= 5) {
    console.log("Player Wins!");
}
else if (computerScore >= 5) {
    console.log("Comnputer Wins!");
}
