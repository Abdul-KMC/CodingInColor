const prompt = require('prompt-sync')();

let user_choice = prompt("Type 'yes' if you want to work with us else type 'no' ");

if (user_choice == "yes") {
    console.log("Hola! you're in");
} else {
    console.log("Sorry! try joinig other team");
}