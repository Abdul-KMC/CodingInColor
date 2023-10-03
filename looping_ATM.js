// Use your ATM machine code that you made for lab this morning. Keep your old code and write new code for an ATM machine that keeps asking the user for how much money they want to deposit or withdraw (positive number is deposit, negative number is withdraw). The ATM adjusts the total balance in the account according to the user’s input, and keeps asking until the user enters “0”. 

const prompt = require('prompt-sync')();

let balance = 100;

for (let i = 0; i < 1; i++) {
    let entry = parseInt(prompt("enter positive value to deposit and negative value to withdraw: "));
    if (entry === 0) {
        console.log("transaction terminated");
    } else if (entry > 0) {
        balance += entry;
        console.log("your new balance is: " + balance);
        i--;
    } else {
        balance += entry;
        console.log("your remaining balance is: " + balance);
        i--;
    }
}