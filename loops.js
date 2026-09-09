
// let sum = 0;
// let n = prompt("Enter a number: ");
// n = Number.parseInt(n);

// for(let i=0; i<n; i++) {
//     console.log(i + 1);
// }
 


for(let i=1; i<=5; i++) {
    console.log(i);
}

//for in loop is used to iterate over the properties of an object. It iterates over the keys of the object.
let obj = {
    harry: 90,
    shubham: 90,
    rohan: 70,
    ankit: 80,  
    shivam: 50
};

for(let key in obj) {
    console.log(key);   
    console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5];

//for of loop is used to iterate over the values of an array or a string. 
for(let key of arr){
    console.log(key);
}

//looping through arrays

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//using for of loop to iterate over the values of an array
for(let fruit of fruits) {
    console.log(fruit);
}

//using for in loop to iterate over the values of an array
for(let fruit in fruits) {
    console.log(fruits[fruit]);
}       

const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j]) {
      console.log('Both arrays have the number: ' + arrayB[j]);
    }
  }
}

//while loop
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while(j < 5);



let countString = '';
let x = 0;

do {
  countString = countString + x;
  x++;
} while (x < 5);

console.log(countString);

console.log(typeof(NaN));
console.log(typeof(undefined));
console.log(typeof(null));   
console.log(typeof(typeof(number)));

//functions as data

const myFunction = function() {
    console.log("Hello from myFunction!");
};

myFunction(); // Calling the function

// Assigning the function to a variable
const anotherFunction = myFunction;

// Calling the function using the new variable
anotherFunction();  

//now if we forgot original function name then we can get it using property name.

console.log(anotherFunction.name); // Output: "myFunction"

//Functions as Parameters

function greet(name) {
    console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

// Passing the greet function as a parameter
processUserInput(greet); // Output: "Hello, Alice!"

//Functions as Return Values

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15   

