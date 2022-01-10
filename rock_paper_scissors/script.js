let computerScore = 0;
let playerScore = 0;
let round = 0;
const computerScoreDisplay = document.querySelector('.computer-score');
const playerScoreDisplay = document.querySelector('.player-score');
const play = ["Rock", "Paper", "Scissors"];

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
    const randomNumber = Math.floor(Math.random() * play.length);
    let move = play[randomNumber];
    return move.toLowerCase();
}

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));


function win(playerSelection, computerSelection) {
    playerScore++;
    round++;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
};
function lose(playerSelection, computerSelection) {
    computerScore++;
    round++;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
};
function draw() { 
    console.log('its a draw')
};

function game(playerSelection) {
    const computerSelection = computerPlay();
    switch(playerSelection + computerSelection) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerSelection, computerSelection);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerSelection, computerSelection);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw();
            break;
    }
}


// function playRound (playerSelection, computerSelection) {
    
//     if (playerSelection === computerSelection) {
//         moveStatus.textContent = "Tie round!";
//         main.insertBefore(moveStatus, scoreBoard);
//         return
//     }
//     else if (
//         (playerSelection === "rock" && computerSelection === "paper") ||
//         (playerSelection === "paper" && computerSelection === "scissors") ||
//         (playerSelection === "scissors" && computerSelection === "rock")
//     ) {
//         moveStatus.textContent = `${computerSelection} beats ${playerSelection}, computer wins this round!`;
//         main.insertBefore(moveStatus, scoreBoard);

       
//         computerScore++;
//         round++;

//         roundNumber.innerHTML = round;
//         computerScoreDisplay.innerHTML = computerScore; // Used innerHTML since textContent expects a string
//     }
//     else if (
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissors" && computerSelection === "paper") ||
//         (playerSelection === "rock" && computerSelection === "scissors")
//     ) {
//         moveStatus.textContent = `${playerSelection} beats ${computerSelection}, player wins this round!`;
//         main.insertBefore(moveStatus, scoreBoard);

//         playerScore++;
//         round++;
        
//         roundNumber.innerHTML = round;
//         playerScoreDisplay.innerHTML = playerScore; // Used innerHTML since textContent expects a string
//     }
// }
// function game() {
//     playRound(playerSelection(), computerPlay());
//     console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
//     console.log(`Round: ${round}`);
// }


// while (round < 6) {
//     console.log(game());
// }
// if (playerScore >= 5) {
//     console.log("Player Wins!");
// }
// else if (computerScore >= 5) {
//     console.log("Comnputer Wins!");
// }
