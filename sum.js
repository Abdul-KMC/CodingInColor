// Write a program that calculates and displays the sum of numbers from 1 to 10: (Make the pseudo code first with make this a lot easier! What does your program need to do at each step? Hint: the variable containing the sum exists outside of the loop, so think about what the loop can help you with (in terms of what we add to that variable))

// Pseudo code
// declare variable to store sum
// run the loop from 1 till 10
// keep on adding the value of loop variable to the sum variable inside the loop
// display the sum after loop we exit the loop

let sum = 0;

for (let i = 1; i <= 10; i = i + 1) {
    sum += i;
}

console.log(sum);