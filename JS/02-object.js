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

    //add a method to greet
        person.greet = function() {
            console.log('Hello, '+ this.name + '!');
        };
    
    // Call the greet method 
    
        person.greet(); //Output: Hello, Nikhil!