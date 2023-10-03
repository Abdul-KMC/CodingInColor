// Use everything you have learned so far to recreate the number guesser project that you have seen the instructors create. Make sure you do this yourself! It it more important to us that you learn how to do it, than to “get it right on the first try”
// If the guess is within 10 of the actual number, tell them they're "Warm". If the guess is more than 10 away from the actual number, tell them they're "Cold"

const prompt = require('prompt-sync')();

let random_number = Math.round(Math.random() * 100);
let condition = true;

while (condition) {
    user_guess = parseInt(prompt("Guess the number between 1 to 100: "));
    if (user_guess === random_number) {
        console.log("Perfect guess!!!");
        condition = false;
    } else if (user_guess - random_number <= 10 && user_guess - random_number >= -10) {
        console.log("You're Warm");
    } else {
        console.log("You're Cold");
    }
}