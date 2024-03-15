//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const name6 = "\t  John Doe \n";
console.log(name6); // Print the name with whitespace
const strippedName = name6.trim();
console.log(strippedName); // Print the name after stripping whitespace