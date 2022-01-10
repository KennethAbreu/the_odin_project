let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('score-board');
const result_div = document.querySelector('.result > p');
const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_button = document.getElementById(userChoice);
    result_div.innerHTML = `Your: ${userChoice} beats Comp's: ${computerChoice} You Win!`;
    userChoice_button.classList.add('green-glow');
    setTimeout(() => userChoice_button.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_button = document.getElementById(userChoice);
    result_div.innerHTML = `Comp's: ${computerChoice} beats Your: ${userChoice} LOSER!`;
    userChoice_button.classList.add('red-glow');
    setTimeout(() => userChoice_button.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice) {
    result_div.innerHTML = `Its a TIE`
    const userChoice_button = document.getElementById(userChoice);
    userChoice_button.classList.add('yellow-glow');
    setTimeout(() => userChoice_button.classList.remove('yellow-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_button.addEventListener('click', () => game('rock'));
    paper_button.addEventListener('click', () => game('paper'));
    scissors_button.addEventListener('click', () => game('scissors'));
}

main();


