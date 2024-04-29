// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let fifteen = 15;
let thirty = 30;
let fruits = ["grapes", "mango", "pineapple"];

// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical test
// Equal to

console.log("\nIs fifteen is equal to thirty?");
console.log(fifteen == 30);

// Not equal
console.log("\nIs fifteen is not equal to thirty?");
console.log(fifteen != 30);

// Greater than
console.log("\nIs fifteen is greaterthan to ten?");
console.log(fifteen > 10);

// Smaller than
console.log("\nIs fifteen is smaller than twenty?");
console.log(fifteen == 20);

// Greater than equal to
console.log("\nIs fifteen is greater than or equal to ten?");
console.log(fifteen >= 10);

// Less than equal to
console.log("\nIs fifteen is less than or equal to ten?");
console.log(fifteen <= 10);

// Test using "and" & "or" Operators

// Using && (and)
console.log("\nthirty is not equal to 10 and  is greater than 50");
console.log(thirty != 50 && thirty > 50);

console.log("\nthirty is not equal to 10 and  is greater than 10");
console.log(thirty != 10 && thirty > 10);

// Using || (or)
console.log("\nthirty is greater than 50 or thirty is equal to 30");
console.log(30 > 50 || 30 == 30);

console.log("\nthirty is greater than 50 or thirty is not equal to 30");
console.log(30 > 50 || 30 != 30);

// Test whether an item is include in array
console.log("\nIs mango include in my fruits array");
console.log(fruits.includes("mango"));

// Not include
console.log("\nIs mango not include in my fruits array");
console.log(!fruits.includes("mango"));