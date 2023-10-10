// Hangman Project:
// Hangman is a word guessing game. A word is chosen at random, and the player attempts to guess the word one letter at a time. The word is represented by a row of underscores, signifying each letter of the word. The word is guessed one letter at a time. For every incorrect guess, a part of a stick figure of a "hanged man" is drawn. The game ends when the player has guessed the word before the figure is fully drawn or if the figure is completed before the word is guessed (6 incorrect guesses). For this project, your program will not be drawing the visual for hangman, and will only provide the user feedback about how many tries they have left.
// Game Mechanics:

// Word Selection:

// At the start of the game, a word is selected randomly from a predefined list.
// The word is then displayed to the player as a series of underscores, each representing a letter.
// Player Guesses:

// The player guesses one letter at a time.
// If the letter is in the word, the underscores corresponding to the occurrences of that letter in the word are replaced by the guessed letter.
// If the letter is not in the word, the player loses a try (gains an incorrect try). 
// Tracking Progress:

// The game keeps track of:
// Letters the player has guessed.
// Incorrect guesses (and number of incorrect guesses so far).
// Endgame:

// Win: The player wins when they guess all the letters of the word correctly before the hangman figure is complete.
// Lose: The player loses if the hangman figure is completed before the word is fully guessed.
// Create a program that allows the user to play Hangman. Remember to think about the flow of the program and write your pseudocode before you begin to program! The process will be much easier if you plan before you code :) Make sure to follow good coding style!

// Pseudocode
// create an array of words and let computer choose word at random position
// convert the word into char array and create the array of same size with "-" at all positions
// get the user character input and check if any of the character in the word matches the user input
// if user input matches any character in the word array display it in the "-" array
// else reduce the number of attempts by one
// check if entire word is out or attempts reaches to 0

let prompt = require('prompt-sync')();

let words = ["one", "two", "three", "four", "five"];
let comp_choice = words[Math.round(Math.random() * 5)]; //getting a random word form the array of words
let rand_word = []; // array to store characters of random word
let disp_array = []; // array to display user their progress
let attempts = 6;
let notWin = true;

// loop to push characters of random  word into array
for (let i = 0; i < comp_choice.length; i++) {
    rand_word.push(comp_choice[i]);
    disp_array.push('-');
}

// function to evaluate the results according to user choice
function checkChar(user_char) {
    let status = 0;
    for (let i = 0; i < rand_word.length; i++) {
        if (rand_word[i] === user_char) {
            disp_array[i] = rand_word[i];
            rand_word[i] = "";
            status = 1;
            break;
        }
    }
    if (status === 0) {
        attempts--;
    }
    console.log(disp_array);
    console.log("Your remaining attempts: " + attempts);
    return attempts;
}

// function to check if user wins or not
function checkWin(disp_array) {
    for (let i = 0; i < disp_array.length; i++) {
        if (disp_array[i] === "-") return false;
    }
    console.log("You Win!!!");
    return true;
}

// loop to prompt user for input until game is over
while (attempts > 0 && notWin) {
    let user_char = prompt("Choose any character between a - z: ");
    let rem_attempts = checkChar(user_char);
    let win = checkWin(disp_array);
    if (win === true) {
        notWin = false;
    } else if (rem_attempts === 0) {
        console.log("Sorry! try again, you've no more attempts left...");
    }
}