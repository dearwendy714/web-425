/*
 *  Title:  Portillo-exercise-1.4.js
 *  Author: Wendy Portillo
 *  Date:   21 December 2019
 *  Description: A program on how to create and
 *               transpile a TypeScript file.
 */

// Variables
let firstName: string = "Wendy";
let lastName: string = "Portillo";

// Function to concatenate strings
function fullName(firstName: string, lastName: string): string {
  return "Hello " + firstName + " " + lastName;
}

// Output message to the console
console.log(fullName(firstName, lastName));
