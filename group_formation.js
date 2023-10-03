const prompt = require('prompt-sync')();

let user_choice = prompt("Choose whether you wanna work with me or not.. ");

if (user_choice == "yes") {
    console.log("Hola! you're in");
} else {
    console.log("Sorry! try joinig other team");
}