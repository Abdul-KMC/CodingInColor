// Write functions for that perform the following tasks (1 function per task):
// 90-100%: A
// 80-90%: B
// 70-80%: C
// 60-70%: D
// < 60%: F
// ^Example: if the grade is 66 and the total is 80, the result should be B. If the grade is 66 and the total is 70, the result should be A. 

// A function that counts the number of vowels in a string
function vowelsCount(input) {
    input = input.toLowerCase();
    let size = input.length;
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (input.charAt(i) === 'a' || input.charAt(i) === 'e' || input.charAt(i) === 'i' || input.charAt(i) === 'o' || input.charAt(i) === 'u') count++;
    }
    return count;
}

let number_of_vowels = vowelsCount("Hello World");
console.log(number_of_vowels);

// A function that, when provided a sentence (string), returns the longest word in the sentence
function longestWord(user_string) {
    let longest = 0;
    let word = "";
    let words = user_string.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (longest < words[i].length) {
            longest = words[i].length;
            word = words[i];
        }
    }
    return word;
}

console.log(longestWord("It's easy to find longest word in string"));

// A function that takes two parameters, a grade and the total, and produces a letter grade to represent the score. The grading scale is:
function gradeSystem(grade, total) {
    let percent = (grade * 100) / total;
    let grade_char = '';
    if (90 < percent && percent <= 100) {
        grade_char = 'A';
    } else if (80 < percent && percent <= 90) {
        grade_char = 'B';
    } else if (70 < percent && percent <= 80) {
        grade_char = 'C';
    } else if (60 < percent && percent <= 70) {
        grade_char = 'D';
    } else if (percent <= 60) {
        grade_char = 'F';
    }
    return grade_char;
}

console.log(gradeSystem(66, 70));

// For your Blackjack project from last week’s lab (Friday), improve your code (in a new copy of your .js file so you don’t lose your work) by converting your game to use the following functions:
// A function that is responsible for asking for user input and checking if it is valid input
// A function that will add the user’s input to the current sum and add on a new random number each time
// A function that is responsible for checking if the game is over and stopping the game if it is
// A function that is responsible for printing a winning or losing message to the console depending on whether the user won or not

const prompt = require('prompt-sync')();

let sum = 0
let inside_loop = true;

function userInput() {
    let user_num = parseInt(prompt("Enter numeric value between 1 and 5: "));
    if (typeof user_num !== 'number' || user_num < 1 || user_num > 5) {
        console.log("Invalid Input..");
        return NaN;
    }
    return user_num;
}

function summation() {
    let comp_num = Math.round(Math.random() * 5);
    let user_num = userInput();
    if (typeof user_num === 'number') sum += comp_num + user_num;
}

function WinOrLoose() {
    if (sum === 21) {
        console.log("You Win!!!");
    } else if (sum > 21) {
        console.log("You Loose");
    }
}

function gameOver() {
    let over = false;
    if (sum >= 21) {
        over = true;
        WinOrLoose();
    }
    return over;
}

while (inside_loop) {
    summation();
    let game = gameOver();
    if (game === true) inside_loop = false;
}