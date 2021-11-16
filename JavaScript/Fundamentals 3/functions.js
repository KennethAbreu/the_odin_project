
//Arrow function expression

/* let add7 = (num)=> num + 7;

let number = 21;

let number2 = add7(number);
console.log(number2);
*/

//Function expression

/* let multiply = function(a,b) {
    return a * b;
}
console.log(multiply(33,2));
*/

//Function declaration
//The function below will take a string argument, point to the charAt spot 0,
//then slice the string and add it to the capitalized letter, finally returning the new string. 

/* function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
   
}
console.log(capitalizeFirstLetter('abreu'));
*/

//Return last letter of string

let lastLetter = (string)=> {
    return string.slice(-1);
}
console.log(lastLetter("Kenneth"));
