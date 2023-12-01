let score = true;
let gameScore = "32ab";
let isLoggedIn = "";

//Three ways to define console.log
console.log(typeof score);
console.log(typeof(score));
console.table([score]);

//Number value
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

//String value
let valueInString = String(score);
console.log(typeof valueInString);

//NaN(Not a Number) value
let valueInNaN = Number(gameScore);
console.log(valueInNaN);

//boolean value
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*Notes: (Boolean conversion)
            1=> true; 0=> false
            false => 0; true => 1
            "" => false
            "Nikhil"=> true
*/

//*********************  Operation **************************

let value = 5;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //power of 
console.log(2/2);
console.log(2%2);

//Add string 
let str1 = "hello";
let str2 = " world";
let string = str1 + str2;
console.log(str1+str2);
console.log(string);

// //Wrong doing
console.log("1" + 3);
console.log(1 + "3");
console.log("1" + "3");
console.log("1"+ 3 * 5);
console.log(1 + 3 + "5");
console.log("1"+ 20 / 5);
console.log(1 + 20 / 5);

// //Right doing
console.log((1 + 3) * 5);

//Should not do this things
console.log(+true);
console.log(+"");

//prefix (increment last)
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

//postfix (increment first)
let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter1);

