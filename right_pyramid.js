// Write a program that generates and displays the following number pattern to the console: (Make the pseudo code first with make this a lot easier! What does your program need to do at each step?)
// 1
// 12
// 123
// 1234
// 12345

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(j + " ");
//     }
//     console.log("\n");
// }

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}