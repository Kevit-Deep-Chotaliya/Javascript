const prompt = require('prompt-sync')();

//even numbers from an array

let arr = [1,2,4,6,7,8,5,12,14,56,78,89,90,100];

let evenNumbers = arr.filter(num => num% 2 === 0);
console.log(evenNumbers);

//Add numbers in an array untill user enters 0

let numbers = [];
let a;

do {
    a = parseInt(prompt("Enter a number (enter 0 to stop): "));
    numbers.push(a);
} while(a !== 0);

console.log("Numbers entered: ", numbers);

//filter out numbers that are divisible by 10

let array = [200,14,145,85,123,20,45,100,125,45,74 ]

let finalNUmbers = array.filter(val => val%10 === 0);
console.log(finalNUmbers)

//return an array of square of given numbers

let arr2 = [4,8,9,5,4,7,15,26,45,85,96]

let squareOfNUmbers = arr2.map(val => val * val);
console.log(squareOfNUmbers)

//factorial of given n natural numbers using reduce() method

const numArr = [1,2,3,4,5,6,7,8,9,10]

const factOfNumbers = numArr.reduce ((num1, num2) => {
    return num1 * num2;
});
console.log(factOfNumbers);



let person = {
    name : 'joy',
    age : 20,
    email : 'user@example.com'
}

console.log(person.email);
console.log(person['name']);