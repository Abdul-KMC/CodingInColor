// Today, you will be creating your own game! A simplified version of Black Jack. The game rules are:
// The computer will start with a random number between 1 and 5. 
// The user will be asked for a number between 1 and 5.
// The computer will add the user’s number to it’s random number. It will check if the total value is 21
// These steps will keep repeating until the total is 21 or above.
// The goal for the user is to try to get 21 exactly. If their total is above 21, they lose. 
// Think about how the game will work and write out the psedocode for the Black Jack game. Write your pseudocode in the comments of your javascript file
// Convert your pseudocode into real code

// Pseudo code
// create a loop that runs until sum of computer generated number and user input number are less than equals to 21
// get a computer generated random number between 1 and 5
// get a user input number between 1 to 5
// check if sum is 21 print you win!!! and break the loop else if sum is greater than 21 print you loose@_@ and break the loop
const prompt = require('prompt-sync')();

let sum = 0
let inside_loop = true;

while (inside_loop) {
    let comp_num = Math.round(Math.random() * 5);
    let user_num = parseInt(prompt("Enter numeric value between 1 and 5: "));
    sum += comp_num + user_num;
    if (sum === 21) {
        console.log("You Win!!!");
        inside_loop = false;
    } else if (sum > 21) {
        console.log("You Loose");
        inside_loop = false;
    }
}