// Product Database Exploration
// You are given a dataset containing information about various products in an online store. The dataset is in the form of an array of product objects. Each product object contains details like name, price, category, and ratings.

const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', ratings: [5, 5, 4, 4, 5] },
    { name: 'Shirt', price: 20, category: 'Apparel', ratings: [4, 3, 5, 4, 4] },
    { name: 'Microwave', price: 150, category: 'Electronics', ratings: [4, 5, 4, 5] },
    { name: 'Shoes', price: 50, category: 'Apparel', ratings: [5, 5, 4, 4] },
    { name: 'Bag', price: 70, category: 'Apparel', ratings: [3, 4, 3, 4, 4] },
    { name: 'Headphones', price: 100, category: 'Electronics', ratings: [5, 2, 5, 4, 4] }
];

// Your job is to use array methods to complete the following tasks on such a dataset, as follows:
// Print each product's name to the console.
console.log();
products.forEach(element => {
    console.log(element.name)
})

// List all products that are under $100.
console.log();
console.log("list of items having price below $100: ");
products.filter(item => item.price < 100)
    .forEach(element => {
        console.log(element.name);
    });

// Create a new array containing the names of all products.
console.log();
console.log("items of array that contains the names of all products ");
let arr = [];
products.forEach(element => {
    arr.push(element.name);
})
console.log(arr);

// Are there any products with a rating below 3?
console.log();
console.log("rating below 3");
const filteredProducts = products.filter(product =>
    product.ratings.some(rating => rating < 3)
);
console.log(filteredProducts);

// Are all the products below $1500?
console.log();
console.log("products below $1500");
let expensive = products.filter(item => item.price < 1500)
    .forEach(element => {
        console.log(element.name);
    });

// Retrieve the first product that belongs to the 'Electronics' category.
console.log();
console.log("first product that belongs to the 'Electronics' category");
let electronics = products.filter(item => item.category === "Electronics")
console.log(electronics[0]);


// Calculate the total cost of all products combined.
console.log();
console.log("the total cost of all products combined.");
let total = 0;
products.forEach(function(elem) {
    total += elem.price;
})
console.log(total);

// Create a new array containing the average rating of each product.
console.log();
console.log("array containing the average rating of each product.");
let avgRating = [];

function average(obj) {
    const sum = obj.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / obj.length;
}

products.forEach(function(obj) {
    avgRating.push(average(obj.ratings))
})
console.log(avgRating);











// console.log("There are");
// // console.log(" two ");
// setTimeout(() => {
//     console.log(" two ");
// }, 4000);
// console.log("consecutive long weekends");