const prompt = require('prompt-sync')();

// // Object-ifying Yourself:
// // Create an object representing yourself. The object should have properties like name, age, isStudent, etc. Print the entire object.
// // Access and print 3 of the properties using dot notation.
// // Try to access an attribute that hasn't been set, like middleName. What gets printed? 
// // Remove the isStudent property from your object without changing your original object declaration. 
// // Add the following properties:
// // hobbies (an array of 3 strings)
// // favoriteColour
// // favoriteSongs (an array of 4 strings) 
// // Print the entire modified object. 
// // Use object dot notation and array accessing to print out the following: “One of my hobbies is __[Your first hobby]___ and the song I play while doing this hobby is ___[Your third favorite song]___”
// // Repeat the above, but using bracket notation instead. 
// // Create the following variable declaration and initialization (let hobbies = 'favoriteFood'). Print out the results of the following and for each one, describe why you get the results that you do: 
// // objectName.hobbies;
// // objectName[hobbies];
// // objectName[‘hobbies’];

const myself = {
    name: "Abdul",
    age: 23,
    isStudent: true,
    height: 6.0,
}
console.log(myself);
console.log(myself.height);
console.log(myself.name);
console.log(myself.isStudent);
console.log(myself.has_car);

delete myself.isStudent;

myself.hobbies = ["hiking", "reading", "sleeping"]; // myself["hobbies"] = ["hiking", "reading", "sleeping"]
myself.favoriteColour = "black";
myself.favoriteSongs = ["Titanium", "AloneII", "Faded", "Earthquake"];

console.log(myself);
console.log(`One of my hobbies is ${myself.hobbies[0]} and the song I play while doing this hobby is ${myself.favoriteSongs[2]}`);
console.log(`One of my hobbies is ${myself["hobbies"][0]} and the song I play while doing this hobby is ${myself["favoriteSongs"][2]}`);

let hobbies = 'favoriteFood';
console.log(myself.hobbies); // access the hobbies property of object myself using dot notation
console.log(myself[hobbies]); // trying to access hobbies from myself object without quotes that is undefined
console.log(myself['hobbies']); // access the hobbies property of object myself using bracket notation

// Expense Tracker:
// Use everything you have learned so far to recreate the expense tracker project that you have seen the instructors create. 
// Make sure you do this yourself! It it more important to us that you learn how to do it, than to “get it right on the first try”
// Challenges: 
// Ask users to categorise their expenses (e.g., "food", "entertainment", "travel") and display a summary of expenses based on categories.
// Let users set a budget limit at the start. Notify the user and cancel any more additions if their total expenses exceed the budget limit.

let budget = parseFloat(prompt("Set your budget for expenses: "));
let record = [];
let total_expense = 0;

while (true) {
    if (total_expense >= budget) {
        console.log("Expenses reaches their limits, terminating the tracker...");
        break;
    }
    let item_description = prompt("Enter the description of your expense or say exit to stop the tracker: ");
    if (item_description === "exit") break;
    let expense_category = prompt("Choose the expense category: 'household', 'education', 'extras' ");
    let value = parseFloat(prompt("Enter the amount you've expensed: "));

    let exp_obj = {
        description: item_description,
        category: expense_category,
        amount: value,
    }
    total_expense += exp_obj.amount;
    record.push(exp_obj);
}

console.log(record);
console.log(`Your total expenses are : ${total_expense}`);

let household_expenses = 0;
let education_expenses = 0;
let extra_expenses = 0;
for (let i = 0; i < record.length; i++) {
    if (record[i].category === "household") {
        household_expenses += record[i].amount;
    } else if (record[i].category === "education") {
        education_expenses += record[i].amount;
    } else {
        extra_expenses += record[i].amount;
    }
}

console.log(`Your household expenses are: ${household_expenses}`);
console.log(`Your educational expenses are: ${education_expenses}`);
console.log(`Your extra expenses are: ${extra_expenses}`);