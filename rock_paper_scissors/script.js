let computerScore = 0;
let playerScore = 0;
let currentComputerScore = document.querySelector('.computer-score');
let currentPlayerScore = document.querySelector('.player-score');
let round = 0;
const play = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * play.length);

const scoreBoard = document.querySelector('.score-board');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let moveStatus = document.createElement('p');



let computerPlay = () => {
    let move = play[random];
    return move.toLowerCase();
}
rock.addEventListener('click', () => {
    let move = rock.textContent.toLowerCase();
    playRound(move, computerPlay());
});
paper.addEventListener('click', () => {
    let move = paper.textContent.toLowerCase();
    playRound(move, computerPlay());
});
scissors.addEventListener('click', () => {
    let move = scissors.textContent.toLowerCase();
    playRound(move, computerPlay());
});

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        moveStatus.textContent = "Tie round!";
        scoreBoard.appendChild()
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        moveStatus.textContent = `${computerSelection} beats ${playerSelection}, computer wins this round!`;
        scoreBoard.appendChild(moveStatus);

        computerScore++;
        round++;

        currentComputerScore.innerHTML = computerScore; // Used innerHTML since textContent expects a string
    }
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        moveStatus.textContent = `${playerSelection} beats ${computerSelection}, player wins this round!`;
        scoreBoard.appendChild(moveStatus);

        playerScore++;
        round++;
        currentPlayerScore.innerHTML = playerScore; // Used innerHTML since textContent expects a string
    }
}
function game() {
    playRound(playerSelection(), computerPlay());
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
    console.log(`Round: ${round}`);
}


// while (round < 6) {
//     console.log(game());
// }
// if (playerScore >= 5) {
//     console.log("Player Wins!");
// }
// else if (computerScore >= 5) {
//     console.log("Comnputer Wins!");
// }
