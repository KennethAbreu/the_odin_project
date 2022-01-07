let computerScore = 0;
let playerScore = 0;
let computerScoreDisplay = document.querySelector('.computer-score');
let playerScoreDisplay = document.querySelector('.player-score');
let round = 0;
const play = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * play.length);

const main = document.querySelector('.main');
const scoreBoard = document.querySelector('.score-board');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let roundNumber = document.querySelector('.round-number');
let moveStatus = document.createElement('p');
let roundCounter = document.createElement('p');


//
let computerPlay = () => {
    let move = play[random];
    return move.toLowerCase();
}

function clickPlayRound() {
    let move = this.textContent.toLowerCase();
    playRound(move, computerPlay());
}

rock.addEventListener('click', clickPlayRound);
paper.addEventListener('click', clickPlayRound);
scissors.addEventListener('click', clickPlayRound);




function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        moveStatus.textContent = "Tie round!";
        main.insertBefore(moveStatus, scoreBoard);
        return
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        moveStatus.textContent = `${computerSelection} beats ${playerSelection}, computer wins this round!`;
        main.insertBefore(moveStatus, scoreBoard);

       
        computerScore++;
        round++;

        roundNumber.innerHTML = round;
        computerScoreDisplay.innerHTML = computerScore; // Used innerHTML since textContent expects a string
    }
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        moveStatus.textContent = `${playerSelection} beats ${computerSelection}, player wins this round!`;
        main.insertBefore(moveStatus, scoreBoard);

        playerScore++;
        round++;
        
        roundNumber.innerHTML = round;
        playerScoreDisplay.innerHTML = playerScore; // Used innerHTML since textContent expects a string
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
