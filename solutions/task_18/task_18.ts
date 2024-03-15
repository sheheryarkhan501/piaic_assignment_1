let places: string[] = ["Tokyo", "New York", "Doha", "Dubai", "Cape Town"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());

// Show that your array is still in its original order by printing it
console.log("Original order confirmed:", places);

// Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", places.sort().reverse());

// Show that your array is still in its original order by printing it again
console.log("Original order confirmed again:", places);

// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Original order restored:", places);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Alphabetical order stored:", places);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort().reverse();
console.log("Reverse alphabetical order stored:", places);
