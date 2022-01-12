let computerScore = 0;
let playerScore = 0;
let round = 0;
const computerScoreDisplay = document.querySelector('.computer-score');
const playerScoreDisplay = document.querySelector('.player-score');
const roundDisplay = document.querySelector('.round-number');
const play = ["Rock", "Paper", "Scissors"];

const main = document.querySelector('.main');
const scoreBoard = document.querySelector('.score-board');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let moveStatus = document.querySelector('.result p');


let computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * play.length);
    let move = play[randomNumber];
    return move.toLowerCase();
}

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));

function announceWinner() {
    if (playerScore === 5) {
        moveStatus.textContent = 'Player Wins!' 
    }
    else {
        moveStatus.textContent = 'Computer Wins!'
    }
}
function resetGame() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    roundDisplay.innerHTML = 0;
    playerScoreDisplay.innerHTML = 0;
    computerScoreDisplay.innerHTML = 0;
}
function win(playerSelection, computerSelection) {
    playerScore++;
    round++;
    roundDisplay.innerHTML = round;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    moveStatus.textContent = `Player's ${playerSelection} beats ${computerSelection}`
};
function lose(playerSelection, computerSelection) {
    computerScore++;
    round++;
    roundDisplay.innerHTML = round;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    moveStatus.textContent = `Computer's ${computerSelection} beats ${playerSelection}`
};
function draw() { 
    moveStatus.textContent = 'Its a DRAW'
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
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
        setTimeout(resetGame, 2000);
    }
}
