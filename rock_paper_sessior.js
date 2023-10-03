// keep record of scores
// have 5 rounds of game 
// option to keep playing (yes/no)

const prompt = require('prompt-sync')();

let user_score = 0;
let comp_score = 0;
rounds = 5;
want_to_play = true;

while (rounds > 0 && want_to_play) {
    let choice = prompt("enter 'y' to keep playing and 'n' to exit the game: ");
    if (choice === 'y') {
        // 1 for rock, 2 for paper,  for sessior
        let comp_choice = Math.floor(Math.random() * 3) + 1;
        let user_choice = prompt("Enter 'r' for rock, 'p' for paper and 's' for sessior: ");
        if (user_choice === 'r' && comp_choice === 1) console.log9("it's a tie...");
        if (user_choice === 'p' && comp_choice === 2) console.log9("it's a tie...");
        if (user_choice === 's' && comp_choice === 3) console.log9("it's a tie...");
        if (user_choice === 'r' && comp_choice === 2) {
            console.log("computer wins!!!");
            comp_score++;
            console.log("computer score: " + comp_score);
        } else if (user_choice === 'r' && comp_choice === 3) {
            console.log("user wins!!!");
            user_score++;
            console.log("users score: " + user_score);
        } else if (user_choice === 'p' && comp_choice === 1) {
            console.log("user wins!!!");
            user_score++;
            console.log("users score: " + user_score);
        } else if (user_choice === 'p' && comp_choice === 3) {
            console.log("computer wins!!!");
            comp_score++;
            console.log("computer score: " + comp_score);
        } else if (user_choice === 's' && comp_choice === 1) {
            console.log("computer wins!!!");
            comp_score++;
            console.log("computer score: " + comp_score);
        } else if (user_choice === 's' && comp_choice === 2) {
            console.log("user wins!!!");
            user_score++;
            console.log("users score: " + user_score);
        }

    } else {
        want_to_play = false;
    }
    rounds--;
}