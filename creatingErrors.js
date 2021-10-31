let myName = "Evan";
let myAge = 38;
let myTown = "Westville; 
// Compilation error - Need quotation mark after "Westville"

console.log("My name is myName. 
I am ${myage} years old and I live in ${myTown}.");

/* Compilation error - For template literals, we need to use backticks, not quotation marks.

Logical error - Writing "myName" as above will simply print the word "myName", not the contents of the variable
called "myName". It should be written in the template literal format of ${myName} to give the expected output.

Runtime error (reference error) - "myage" variable doesn't exist. Should be "myAge". */