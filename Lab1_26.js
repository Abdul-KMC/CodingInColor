// Declare a variable for your first name, a variable for your last name, a variable for your age, a variable for whether you like ice cream or not, and a variable for your favourite colour, 
// Declare a variable for your full name and assign it by concatenating your first and last name. Make sure to use your variables!
// Log this sentence, replacing the bold parts with the values stored in your variables: “I am fullname, and I am age years old, and I preference icecream that is favouritecolour”
// Edit the code and try to produce at least 5 different error messages. What do these messages say? Copy them into you file as comments

// var first_name = "Abdul";
// var last_name = "Hadi";
// var age = 22;
// var iceCream = "don't like";
// var favorite_color = "black";
// var full_name = first_name + last_name;

// console.log("I am " + full_name + " , and I am " + age + " years old, and I " + iceCream + " icecream that is " + favorite_color);

// var eight = (false && 8);
// console.log(eight);

// Lab1.2

// “Five is less than two”
// “Twelve is not equivalent to one hundred”
// “Apples are red or green”
// “Cats are cute and not quiet” 

// console.log(5 < 2);
// console.log(12 != 100);
// let apples = "red";
// console.log(apples === "red" || apples === "green");
// let cute = true;
// let quite = false;
// console.log("cats are cute " + cute + " but also quite " + quite);

// Lab2.1_26
// var cook_dinner;
// var ingredients = true;
// var finish_by_six = true;
// cook_dinner = (ingredients && finish_by_six);
// console.log(cook_dinner);

// var make_sandwitch;
// var bread = true;
// var peanut_butter = true;
// var jelly = false;
// make_sandwitch = (bread && (peanut_butter || jelly));
// console.log(make_sandwitch);

// var bake_cookies;
// var all_ingredients = true;
// var chocolate_chips = false;
// var raisins = true;
// bake_cookies = (all_ingredients && (chocolate_chips || raisins));
// console.log(bake_cookies);

// Lab2.2_26
// Use variables to write the code equivalents of the following expressions and log whether the statement is true or false:
// “Three is not bigger than thirty-three” 
// “Twenty-four divided by six is four”
// “Eight is larger than seven and smaller than ten”
// “‘Coding” comes before “Programming” (in the alphabet) and 2023 comes before 2024 (in numbers)” 
// Use comments to write out the evaluation steps for the following script:
let num1 = 2023
let num2 = 2024
let str1 = "Coding";
let str2 = "Programming";
let result1 = !(str1 > str2) && num1 < num2;
let result2 = !(str1 > str2 && num1 < num2);
// Are result1 and result2 the same? Explain your answer in comments
console.log(result1, result2);
// Submit: Your JavaScript file(s)
console.log(!(3 > 33));
console.log(24 / 6 === 4);
console.log(8 > 7 && 8 < 10);
console.log("coding" < "programming" && 2023 < 2024);