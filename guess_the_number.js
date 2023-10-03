const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = Math.floor(Math.random() * 10);

function askUserForGuess() {
    rl.question('Guess the number (between 0 and 9): ', (userInput) => {
        const user_num = parseInt(userInput);

        if (isNaN(user_num)) {
            console.log('Please enter a valid number.');
            askUserForGuess();
        } else if (user_num === num) {
            console.log('You guessed it right!');
            rl.close();
        } else if (user_num < num) {
            console.log('Try something higher.');
            askUserForGuess();
        } else if (user_num > num) {
            console.log('Try something lower.');
            askUserForGuess();
        } else {
            console.log("Invalid Input");
        }
    });
}

askUserForGuess();