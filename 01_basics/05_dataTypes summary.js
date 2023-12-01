// Primitive
// 7 Types: Strings, Number, Boolean, null, undefined, symbol, bigint

const score = 100;
const scorevalue = 100.4;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol(123);
const anotherid = Symbol(123);

const bigNumber = 75757476474674657n

// Reference (non primitive)
//Array, Object, Function

//Array
const heros = ["Niklhil","shaktiman","doga"];

//object
const nikhil = {
    name: "Nikhil",
    age: 22,
}

// Function
const myFunction = function (){
    console.log("hello world");
}

//************************** Memory ********************************

// Stack (Primitive), Heap(Non-Primitive)

let myName = "Nikhil";
let myAnotherName = myName;
myAnotherName = "Deepak";

// console.log(myAnotherName);

//**********************************************************************

let myobj = {
    name: "nikhil",
    age: 22
}

let myobj2 = myobj;

myobj.name = "deepak"

console.log(myobj2.name);
console.log(myobj.name);