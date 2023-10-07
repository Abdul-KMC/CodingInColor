// Today, we'll be revisiting functions, and refactoring the rock-paper-scissors game we worked on during the past lab
// We can provide a few hints that can help you think about how you'd go about this process. One important thing to think about is to review the existing code, and look into how we can 'comparmentalize' functionality to make our code cleaner
// Think about the following:
// A function that gets user input and handles invalid input --> there are a few cases for this (for e.g., getting the user's choice for rock, paper or scissors, or getting the user's choice for playing again or not, there's a lot of potential functions we can isolate here)
// A function that determines the computer's choice randomly (rock paper or scissors)
// A function that determines who won the current round and updates score appropriately
// A function that prints out the round score
// A function that prints out the final score
// The above are all suggestions for potential functions. There are likely many other ways to refactor this code.
// Another useful thing to do with the above functions, is to add comments in the following style before we write the function
// Requires: what sort of input is going into this function?
// Does: what does the function do/check for/accomplish?
// Returns: what type of value does the function return?

const prompt = require('prompt-sync')();

let user_score = 0;
let comp_score = 0;
let rounds = 5;

function userInput() {
    let user_choice = prompt("Enter your choice from: 'rock', 'paper' and 'scissor' or 'quit' to exit the game - ");
    if (user_choice === "rock" || user_choice === "paper" || user_choice === "scissor" || user_choice === "quit") {
        return user_choice;
    } else {
        console.log("Invalid Input");
        userInput();
    }
}

function compItem() {
    let comp_choice = "";
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        comp_choice = "rock";
    } else if (randNum === 2) {
        comp_choice = "paper";
    } else {
        comp_choice = "scissor";
    }
    return comp_choice;
}

function roundStatus(ui, ci) {
    if (ui === ci) {
        console.log("it's a tie...");
    } else if (ui === "rock" && ci === "paper" || ui === "paper" && ci === "scissor" || ui === "scissor" && ci === "rock") {
        console.log("computer wins the round ! ");
        comp_score++;
        console.log("computer score: " + comp_score + " your score: " + user_score);
    } else {
        console.log("you win the round !");
        user_score++;
        console.log("computer score: " + comp_score + " your score: " + user_score);
    }
}

function Rematch() {
    let rematch = prompt("Enter 'rematch' to play again and 'quit' to exit the game: ")
    if (rematch === "rematch") {
        user_score = 0;
        comp_score = 0;
        rounds = 5;
    } else if (rematch === "quit") {
        console.log("game exits successfully");
    } else {
        console.log("Invalid choice");
    }
}

function finalStatus() {
    if (user_score === comp_score) {
        console.log("Oo! it's a tie.. ");
    } else if (user_score > comp_score) {
        console.log("You win the match!!!");
        console.log("computer score: " + comp_score + " your score: " + user_score);
    } else {
        console.log("Sorry! computer win's the match..");
        console.log("computer score: " + comp_score + " your score: " + user_score);
    }
}

while (rounds > 0) {
    let ui = userInput();
    if (ui === "quit") break;
    let ci = compItem();
    roundStatus(ui, ci);
    rounds--;
    if (rounds === 0) {
        finalStatus();
        Rematch();
    }
}