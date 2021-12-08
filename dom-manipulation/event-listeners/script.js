// Method 2
// This method is a little better, since we've moved the JS out of the html file 
// into a JS file, but we still have the problem that a DOM element can only have 1 
// "onclick" property.

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// THEE method
// This is the best method, as it allows for 
// multiple event listeners/functions if needed

const theBtn = document.querySelector('#the-btn');
theBtn.addEventListener('click', () => {
    alert('You know thats right ;)');
});


// Using named functions 
// Using a named function is great when the function is something you'll want to do 
// in multiple places.

function alertFunction() {
    alert('WOOT!');
}


// Attach listeners to a group of nodes 

// buttons is a node list. Looks & acts much like an array, but doesn't have array methods
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    //add an event listener to each button by iterating through node list
    button.addEventListener('click', () => {
        alert(button.id);
    });
})
