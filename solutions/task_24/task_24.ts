
// Tests for equality and inequality with strings
let city: string = "Tokyo";
console.log("Equality test (true):", city === "Tokyo");
console.log("Inequality test (false):", city !== "Tokyo");

// Tests using the lower case function
let food: string = "Sushi";
console.log("Lowercase test (true):", food.toLowerCase() === "sushi");
console.log("Lowercase test (false):", food.toLowerCase() === "SUSHI");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age: number = 30;
console.log("Equality test (true):", age === 30);
console.log("Inequality test (false):", age !== 30);
console.log("Greater than test (true):", age > 20);
console.log("Less than test (false):", age < 20);
console.log("Greater than or equal to test (true):", age >= 30);
console.log("Less than or equal to test (false):", age <= 20);

// Tests using "and" and "or" operators
let temperature: number = 22;
console.log("And test (true):", temperature > 20 && temperature < 25);
console.log("Or test (false):", temperature < 20 || temperature > 25);

// Test whether an item is in a array
let fruits: string[] = ["apple", "banana", "mango"];
console.log("Test item in array (true):", fruits.includes("banana"));
console.log("Test item in array (false):", fruits.includes("grape"));

// Test whether an item is not in a array
console.log("Test item not in array (true):", !fruits.includes("grape"));
console.log("Test item not in array (false):", !fruits.includes("banana"));
