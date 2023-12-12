//Basic Variable Declaration and Assignment

// Using 'var'
var myVar = 'Hello, JavaScript!';

// Using 'let'
let myNumber = 42;

// Using 'const'
const PI = 3.14;

// Outputting the values
console.log(myVar);      // Output: Hello, JavaScript!
console.log(myNumber);   // Output: 42
console.log(PI);         // Output: 3.14

//Scoping 

function exampleFunction() {
    if (true) {
      let insideIf = 'I am inside the if block';
      console.log(insideIf);  // Output: I am inside the if block
    }
    // Uncommenting the line below will result in an error since 'insideIf' is not defined in this scope
    // console.log(insideIf);
  }
  
  exampleFunction();
  

// Best Practices:
// Minimize the use of global variables to avoid unintended side effects.
// Initialize variables when declaring them to prevent unexpected values.
// Use const by default and only use let when you need to reassign a variable.
// Follow meaningful and consistent naming conventions for variables.
// Use camelCase for better readability.