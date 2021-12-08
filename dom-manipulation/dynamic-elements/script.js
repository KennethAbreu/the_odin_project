const container = document.querySelector('.container');
const body = document.getElementById(null);

let content = document.createElement('div');
// Give the newly created div the class name 'content'
content.classList.add('content');
content.textContent = 'This is the text';

container.appendChild(content);

// Create a p tag with red text

let redText = document.createElement('p');
redText.classList.add('red-text');
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

// Create an h3 with blue text

let blueText = document.createElement('h3');
blueText.classList.add('blue-text');
blueText.textContent = "I'm a blue h3!";

container.appendChild(blueText);

// Create a div with a black border & pink background 

let pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-div');

document.body.appendChild(pinkDiv); // Append to body itself. .body property of the document object

// Add an h1 inside pinkDiv with text

let pinkHeader = document.createElement('h1');
pinkHeader.classList.add('pink-header');
pinkHeader.textContent = 'Header inside of Div';

pinkDiv.appendChild(pinkHeader);

// Add a p tag inside pinkDiv with text 

let pinkPara = document.createElement('p');

pinkPara.classList.add('pink-para');
pinkPara.textContent = 'P tag inside Div'

pinkDiv.appendChild(pinkPara);