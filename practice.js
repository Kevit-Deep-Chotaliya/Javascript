//Use the .length property to find the last element of an array.

let arr = [1, 2, 3, 4, 5];
let lastElement = arr[arr.length - 1];  
console.log(lastElement); // Output: 5

//Take all the elements in an array and make a string.

let str = arr.join(", ");
console.log(str); // Output: "1, 2, 3, 4, 5"

//using .toString() method to convert an array to a string

let str2 = arr.toString();
console.log(str2); // Output: "1,2,3,4,5"

//Find the return value of calling .push() on an array.

let newArr = [1, 2, 3];
let newLength = newArr.push(4);
console.log(newLength); // Output: 4 returns the new length of the array after adding the new element
console.log(newArr); // Output: [1, 2, 3, 4]

//Find the return value of calling .pop() on an array.

let poppedElement = newArr.pop();
console.log(poppedElement); // Output: 4 returns the removed element
console.log(newArr); // Output: [1, 2, 3]

//Nest an array within an array. Access an element in the nested array.

const nestArr = [1,2,3,[4,5]];
console.log(nestArr[3][0]);

//const doesn't make the array immutable — it just locks the variable binding.

const array = [1, 2, 3];
array.push(4);        // ✅ works fine
array[0] = 99;         // ✅ works fine
console.log(array);   // [99, 2, 3, 4]

//array = [5, 6, 7];     // ❌ TypeError: Assignment to constant variable

//let behaves the same way for mutation, but also allows reassignment:

let arr2 = [1, 2, 3];
arr2.push(4,5,8);        // ✅ works
// arr2 = [5, 6, 7];     // ✅ works — let allows reassignment
console.log(arr2);    // Output: [5, 6, 7]

const arr3 = [1, 2, 3];
const no = arr3.shift(); // ✅ works fine
console.log(no);

const arr4 = [1,2,3,4,5,6,6,7,7,8];
console.log(delete arr4[3]); // Output: true
console.log(arr4); // Output: [1, 2, 3, undefined, 5, 6, 6, 7, 7, 8]
console.log(arr4[3]); // Output: undefined

const finalarr = arr4.slice(6,9); // ✅ works fine
console.log(finalarr); // Output: [6, 7, 7]