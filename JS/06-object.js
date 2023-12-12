// Experiment 1: Creating and accessing properties.

    // Create a person object

        let person = {
            name: "Nikhil",
            age: 23,
            occupation: 'developer'
        };

    // Accessing and log properties

        console.log(person.name);   //Output: nikhil
        console.log(person.age);    //Output: 23
        console.log(person.occupation); //Output: developer

// Experiment 2: Adding methods

    // Add a method to greet
        person.greet = function() {
            console.log('Hello, '+ this.name + '!');
        };
    
    // Call the greet method 
    
        person.greet(); //Output: Hello, Nikhil!



// Experiment 3: Object Comparison

// Create two objects with similar properties
const obj1 = { name: 'Nikhil', age: 22, city: 'Mumbai' };
const obj2 = { name: 'Nikhil', age: 22, city: 'Mumbai' };

// Compare using ==
console.log('Using ==:');
console.log(obj1 == obj2); // Output: false (reference comparison)

// Compare using ===
console.log('\nUsing ===:');
console.log(obj1 === obj2); // Output: false (reference comparison)

// Create a third object with different properties
const obj3 = { name: 'Purva', age: 20, city: 'Goa' };

// Compare with the first object using ==
console.log('\nComparing with obj1 using ==:');
console.log(obj1 == obj3); // Output: false (reference comparison)

// Compare with the first object using ===
console.log('\nComparing with obj1 using ===:');
console.log(obj1 === obj3); // Output: false (reference comparison)



// Example 1: Objects with the Same Reference

// Creating an object called originalObject
const originalObject = { key: 'value' };

// Creating anotherObject and assigning it the same reference as originalObject
const anotherObject = originalObject;

// Checking if both objects have the same reference
console.log(originalObject === anotherObject); // true



// Example 2: Cloning an Object

// Creating an object called originalObject
const originalObject1 = { key: 'value' };

// Creating a new object (copiedObject) with the same content as originalObject
const copiedObject = { ...originalObject1 }; // Using the spread syntax for shallow copy

// Checking if both objects have the same reference
console.log(originalObject1 === copiedObject); // false




// Experiment 4

// Define a constructor function called 'user'
function user(name, age) {
    // Inside the constructor function:
    
    // Assign the 'name' and 'age' parameters to the properties of the object being created
    this.name = name;
    this.age = age;

    // Define a method 'sayHello' for the object
    this.sayHello = function () {
        console.log(`hello my ${this.name} and my age is ${this.age}`);
    }
}

// Create an instance of the 'user' object using the constructor function
const nikhil = new user("nikhil", 22);

// Access and log the 'name' and 'age' properties of the 'nikhil' object
console.log(nikhil.name); // Output: nikhil
console.log(nikhil.age);  // Output: 22

// Call the 'sayHello' method of the 'nikhil' object
nikhil.sayHello(); // Output: hello my nikhil and my age is 22


// Experiment 5

// Creating three objects with numeric keys and corresponding values
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj3 = { 5: "a", 6: "b" };

// Using Object.assign to merge objects obj1, obj2, and obj3 into a new object (commented out for reference)
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

// Using object literal notation to create a new object with properties obj1 and obj2 (commented out for reference)
// const obj4 = { obj1, obj2 };
// console.log(obj4);

// Using the spread operator (...) to merge properties of obj1, obj2, and obj3 into a new object
// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);


// Experiment 6

// Defining a Tinder user object
const tinderUser = {
    ID: 232442,
    name: 'Nikhil Gawade',
    age: 22,
    isLoggedIn: true,
}

// Method 1: Using Object.keys to get an array of property names
const keysArray = Object.keys(tinderUser);
console.log(keysArray);

// Method 2: Using Object.values to get an array of property values
const valuesArray = Object.values(tinderUser);
console.log(valuesArray);

// Method 3: Using Object.entries to get an array of [key, value] pairs
const entriesArray = Object.entries(tinderUser);
console.log(entriesArray);

// Method 4: Using hasOwnProperty to check if an object has a specific property
const hasLoggedInProperty = tinderUser.hasOwnProperty('isLoggedIn');
console.log(hasLoggedInProperty);

// Method 5: Using Object.freeze to make the object immutable
const frozenUser = Object.freeze(tinderUser);
// Example: Trying to modify a property in a frozen object will result in an error
// frozenUser.age = 23;

// Method 6: Using Object.seal to prevent adding or removing properties, but allows property value modification
const sealedUser = Object.seal(tinderUser);
// Example: Adding a new property will not work, but modifying existing properties is allowed
// sealedUser.location = 'New York';
// sealedUser.age = 23;

// Method 7: Using Object.assign to merge properties from multiple objects into a new object
const additionalInfo = { hobbies: ['reading', 'coding'] };
const mergedUser = Object.assign({}, tinderUser, additionalInfo);
console.log(mergedUser);


// Experiment 7

// Defining a course object
const course = {
    courseName: 'JavaScript MasterClass',
    CourseInstuctor: 'Purva Talekar',
    CoursePrice: "$200"
}

// Accessing a property using dot notation
course.CourseInstuctor; // Returns 'Purva Talekar'

// Method 1: Destructuring assignment to extract a property
const { CourseInstuctor } = course;
console.log(CourseInstuctor); // Returns 'Purva Talekar'

// Method 2: Destructuring assignment with alias (renaming) for a property
const { courseName: name } = course;
console.log(name); // Returns 'JavaScript MasterClass'

