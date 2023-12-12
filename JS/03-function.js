//Function Declaration: 

function greetMale(name) {
    console.log(`Hello, ${name}`);
};

greetMale("Nikhil");

// Function Expression:

const greetFemale = function (name) {
    console.log(`Hello, ${name}!`);
};

greetFemale('Purva');

// NOTES
// Key Differences:

// Hoisting:
// Function declarations are hoisted entirely, so you can call them before the actual declaration in your code.
// Function expressions are also hoisted, but only the variable declaration, not the function definition.

// Usage:
// Function declarations can be used anywhere in the code, even before the declaration.
// Function expressions must be declared before they are called.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Function Parameters:
// Parameters are variables listed in a function's declaration.
// They act as placeholders for values that will be passed to the function when it is called.

function addNumbers(a, b) {
    console.log(a + b);
  }

// Function Arguments:
// Arguments are the actual values passed to a function when it is called.

addNumbers(5, 7);  // Output: 12

// Default Parameters (ES6 and later):
// You can assign default values to parameters, making them optional when calling the function.

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }


// If you have two or more parameters in a function and you want to set default values for some of them,
// you can specify default values individually for each parameter.

function greet(name = 'Guest', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
  }
  
  // Calling the function with only one argument
  greet('Purva');  // Output: Hello, John!
  
  // Calling the function with both arguments
  greet('Purva', 'Good morning');  // Output: Good morning, Jane!
  
  // Calling the function with no arguments (defaults will be used)
  greet();  // Output: Hello, Guest!
  