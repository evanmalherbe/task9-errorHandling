// Declare variables for task

let num1 = 1;
let num2 = 2;
let num3 = 3;

// ----------------------- Compulsory Task 1 answers -----------------------------

// 1  - Compare 2 numbers and show largest value
if (num1 > num2) {
    console.log(num1 + " is the largest.");

} else if (num2 > num1) {
    console.log(num2 + " is the largest.");

} else if (num1 == num2) {
    console.log("Both numbers are equal.");
}

// 2 - Determine if num is odd or even and display result
if (num1 % 2 == 0) {
    console.log(num1 + " is an even number.");
} else {
    console.log(num1 + " is an odd number.");
}

// 3 - Sort 3 numbers from largest to smallest

let num1 = 22;
let num2 = 1;
let num3 = 7;

let largestNum;
let middleNum;
let smallNum;

if (num1 > num2 && num1 > num3) {
    largestNum = num1;
} else if (num2 > num1 && num2 > num3) {
    largestNum = num2;
} else {
    largestNum = num3;
}

if (num1 < num2 && num1 < num3) {
    smallNum = num1;
} else if (num2 < num1 && num2 < num3) {
    smallNum = num2;
} else {
    smallNum = num3;
}

if (num1 < largestNum && num1 > smallNum) {
    middleNum = num1;
} else if (num2 < largestNum && num2 > smallNum) {
    middleNum = num2;
} else {
    middleNum = num3;
}

console.log("The smallest number is: " + smallNum);
console.log("The middle number is: " + middleNum);
console.log("The largest number is: " + largestNum);

// 4 - Write a "for" loop to display numbers 0 - 20

let i;

for (i = 0; i <= 20; i++) {
    console.log(i);
}

// 5 - Write a "while" loop to display numbers 0 - 20

let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

// 6 - Display all even numbers between 1 - 20 (i.e. excludes 20)

let i;
for (i = 1; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 7 - Create output of stars "*" - one on line one, 2 on line 2, up until 5 on the last line using a nested loop

let i;
let j;
let starOutput = "";

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 1; j++) {
        starOutput += "*";
    }
    console.log(starOutput);
}

// 8 - Calculate the greatest common divisor (GCD) of two positive integers

let inputA = 48;
let inputB = 18;
let a = inputA;
let b = inputB;
let c;

// I referred to the Wikipedia article on the "Greatest Common Divisor" and used the "Euclidean algorithm".
// https://en.wikipedia.org/wiki/Greatest_common_divisor
//  They say: Calculate (b, a mod b) repeatedly until the pair is (d, 0), where d is the greatest common divisor.

while (b > 0) {
    c = a % b;
    console.log("(" + b + "," + c + ")");
    a = b;
    b = c;
}

console.log(`Therefore, ${a} is the Greatest Common Divisor of ${inputA} and ${inputB}`);