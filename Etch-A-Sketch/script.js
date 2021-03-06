const gridContainer = document.querySelector('.grid-container');
const rainbow_Button = document.querySelector('.rainbow');
const reset_Button = document.querySelector('.reset');
const colorDivs = document.querySelectorAll('.drawColor')

function addHover(createdDiv) {
    createdDiv.addEventListener('mouseenter', () => {
        createdDiv.className = 'drawColor';
    });
}
function resetGrid() {
    gridContainer.innerHTML = '';
    let numberChoice = prompt('How many squares per side of grid?');
    createGrid(numberChoice);
}
function createGrid(boxNumber) {
    const boxCount = boxNumber * boxNumber;
    gridContainer.style.gridTemplateColumns = `repeat(${boxNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${boxNumber}, 1fr)`;
    for (i = 0; i < boxCount; i++) {
        let createDiv = document.createElement('div');
        addHover(createDiv);
        gridContainer.appendChild(createDiv).id = 'border';
    }
}

createGrid(16)
reset_Button.addEventListener('click', resetGrid);