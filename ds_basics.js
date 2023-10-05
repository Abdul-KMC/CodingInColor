const prompt = require('prompt-sync')();

// Favourite Songs:
// Use an array to make a list of 5 of your favourite songs. Print the entire array and its length
// For each of the following, write a new line of code (do not remove code you have already written):
// Change the third song on your list to a song that you really dislike. Print the modified array. 
// Remove a song from the end of your array. Print the modified array. 
// Add a new song to the end of your array. Print the modified array. 
// Remove a song from the beginning of your array. Print the modified array. 
// Add a new song to the beginning of your array. Print the modified array. 
// Try to access the 10th song on your list. What happens?  

var songs = [];
for (let i = 0; i < 5; i++) {
    songs.push(prompt("Enter your favourite song: "));
}
console.log(songs);
console.log("size of your playlist is: " + songs.length);

songs[2] = prompt("Enter the song you really dislike: ");
console.log("your playlist after replacing your favourite song with the song you dislike ")
console.log(songs);

songs.pop();
console.log("your playlist after removing the last song ")
console.log(songs);

songs.push(prompt("Enter the you would like to add to your playlist: "));
console.log("your playlist after adding song ")
console.log(songs);

songs.shift();
console.log("your playlist after removing first song of your playlist ")
console.log(songs);

songs.unshift(prompt("Enter the you would like to add at the beginning your playlist: "));
console.log("your playlist after adding song at first position of your playlist ")
console.log(songs);

console.log(songs[9]);

// Sums in 2D Arrays: 
// You are given the following 2D array: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Use a for loop to print the sum of each row on a new line, 
// Use a for loop to calculate the sum of the diagonals
// Challenge: do both in a single for loop!

let two_d_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let row_sum = 0;
for (let i = 0; i < two_d_array.length; i++) {
    for (let j = 0; j < two_d_array[0].length; j++) {
        row_sum += two_d_array[i][j];
    }
    console.log(row_sum + "\n");
    row_sum = 0;
}

let diagonal_sum = 0;
for (let i = 0; i < two_d_array.length; i++) {
    for (let j = 0; j < two_d_array[0].length; j++) {
        if (i === j) diagonal_sum += two_d_array[i][j];
    }
}
console.log("sum of diagonal elements is: " + diagonal_sum);

// Movie Theatre: 
// You are now going to explore how to represent a movie theatre as an array of arrays. Make an array representation of a theatre with 3 rows and 5 seats per row, and print the representation of your theatre. 
// You are now accepting ticket purchases, and need to put an “X” in the seats that are purchased. Seats are booked using user input for which row and seat number they want (eg row 3, seat 3). They will be asked for the row number and seat number separately. 
// If a seat is already booked, the user should be asked to try again. Otherwise, a new ‘X’ will be placed in the chosen seat.

let theatre = [];

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
        let seat = String(i) + j;
        row.push(seat);
    }
    theatre.push(row);
}
console.log(theatre);

let seats_count = 15;
while (seats_count > 0) {
    let user_row = prompt("Enter 1 for 1st row 2 for second and 3 for last row: ");
    let user_seat = prompt("choose you seat number within 5 options: ");
    if (theatre[user_row - 1][user_seat - 1] !== "X") {
        theatre[user_row - 1][user_seat - 1] = "X";
        seats_count--;
        console.log("booking confirmed!!!")
    } else {
        console.log("Sorry! seat you're trying to book is already booked, try again.")
    }
}