const prompt = require('prompt-sync')();

let balance = 100;
let choice = prompt("enter 'D' to deposit and 'W' to withdraw: ");

if (choice === "D" || choice === "d") {
    let amount = parseInt(prompt("Enter the amount to deposit in positive value: "));
    balance += amount;
    console.log("your new balance is: " + balance);
} else if (choice === "W" || choice === "w") {
    let amount = parseInt(prompt("Enter the amount to withdraw in negative value: "));
    balance += amount;
    console.log("your new balance is: " + balance);
} else {
    console.log("Invalid Input");
}