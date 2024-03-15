//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "john doe";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.replace(/\b\w/g, l => l.toUpperCase()));

// Path: solutions/task_4/task_4.ts

