// This example program is meant to demonstrate errors.

// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program"); // Syntax error - missing brackets
console.log("\n"); // Syntax error - capital "C" for console (should be lowercase) and missing brackets

let ageStr = "24";
/* Syntax error - Should be single "=" not double, as we want to assign a value to the variable, not 
compare it with the operator "==". */

let age = Number(ageStr);
/* Runtime error (Reference error) - Variable not defined as there is no "let" before "age" variable. 
Runtime error (type error) - "Integer" is not the correct function name for converting strings to numbers. 
Should have used "Number". Also, "Number" doesn't work on this string, as it has numbers and letters, so
it returns "Not a number (NaN)" - changed variable ageStr to just "24". Syntax error - missing semicolon 
after statement. */

console.log("I'm " + age + " years old."); // Logical error - no spaces after "I'm" or before "years"
let three = 3; // Runtime error(type error) Should be the number 3 not the string "3"

let answerYears = age + three;
/* Logical error - Because the variable "three" above is a string, not a number, this would concatenate 24 and 
the string "3" to make "243", instead of the expected answer of 27. */

console.log("The total number of years: " + answerYears);
/* Syntax error  - missing brackets. Also logical error because answerYears is a variable and should not be in 
quotation marks, otherwise it will output as the string "answerYears". Also missing space after "...years:". */

let answerMonths = answerYears * 12 + 6;
/* Runtime error (Reference error) - undefined variable answerMonths. Need to add "let" before it to declare it.
Runtime error (Reference error) - "answer" variable is not defined. It should be "answerYears" as defined earlier.
Logical error - calculation for "answerMonths" variable will not give correct answer in last line of program. 
Add 6 to calculation (for the 6 months).                                     
Syntax error - missing semi colon after statement.*/

console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old."); 
/* Syntax error - Missing brackets. Also logical error, as we need to add spaces after "...I'll be..." and before
"...months old." */

//HINT, 330 months is the correct answer