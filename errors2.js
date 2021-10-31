// This example program is meant to demonstrate errors.

// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion";
/* Syntax error - Missing quotation marks around Lion to make it a valid string and missing semi
colon at end of statement. */

let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = 4; // Runtime error (type error) - should be 4 (number) not "4" (string).

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.`
/* Runtime error (reference error) - fullSpec variable not declared with "let". 

Syntax error - Should use backticks, not quotation marks when using template literals. Also missing $ for 
template literals. 

Logical error - Variables "number_of_teeth" and "animal_type" must switch places, otherwise resulting sentence 
won't make sense.

Runtime error (reference error) - Variable "animal_type" doesn't exist. Should be "animalType". Also, variable
"number_of_teeth" doesn't exist. Should be "numberOfTeeth". */

if (numberOfLegs > 3) {
        console.log(fullSpec);
}
/* Logical error - if statement won't run, as number of legs is more than 3. Change "=" to ">" to fix.
Syntax error - Missing brackets for console.log function.
Runtime error (reference error) - "full_spec" variable doesn't exist. Should be "fullSpec". */