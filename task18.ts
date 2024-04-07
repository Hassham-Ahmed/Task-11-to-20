// Store the locations in an array
let placestovisit: string[] = ["Tokyo", "New York", "Fin Land", "South Korea", "Nether Land"];

// Print the array in its original order
console.log("Original order:", placestovisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placestovisit.sort());

// Show that the array is still in its original order
console.log("Original order (still intact):", placestovisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", placestovisit.sort().reverse());

// Show that the array is still in its original order
console.log("Original order (still intact):", placestovisit);

// Reverse the order of the list
placestovisit.reverse();
console.log("Reversed order:", placestovisit);

// Reverse the order of the list again to get back to the original order
placestovisit.reverse();
console.log("Back to original order:", placestovisit);

// Sort the array so it’s stored in alphabetical order
placestovisit.sort();
console.log("Sorted in alphabetical order:", placestovisit);

// Sort to change the array so it’s stored in reverse alphabetical order
placestovisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placestovisit);
