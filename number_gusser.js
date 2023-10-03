const prompt = require('prompt-sync')();

let num = Math.floor(Math.random() * 10);
let user_num = parseInt(prompt("Guess the number between 1 to 10: "));

if (isNaN(user_num)) {
    console.log('Please enter a valid number.');
} else if (user_num === num) {
    console.log('You guessed it right!');
} else if (user_num < num) {
    console.log('Try something higher.');
} else if (user_num > num) {
    console.log('Try something lower.');
} else {
    console.log("Invalid Input");
}