//Array Methods

//1.push() - adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

//2.pop() - removes the last element from an array and returns that element.

let vegetables = ["carrot", "broccoli", "spinach"];
let lastVegetable = vegetables.pop();
console.log(lastVegetable); // Output: "spinach"
console.log(vegetables); // Output: ["carrot", "broccoli"]

//3.toString() - converts an array to a string and returns the result.

let colors = ["red", "green", "blue"];
let colorsString = colors.toString();
console.log(colorsString); // Output: "red,green,blue"
console.log(typeof colorsString); // Output: "string"

//4.join() - joins all elements of an array into a string and returns the result.

let animals = ["dog", "cat", "rabbit"];
let animalsString = animals.join(" - ");
console.log(animalsString, typeof animalsString); // Output: "dog - cat - rabbit" string

//5.shift() - removes the first element from an array and returns that element.     
let numbers = [1, 2, 3, 4, 5];      
let firstNumber = numbers.shift();              
console.log(firstNumber); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

//6.unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.

let letters = ["b", "c", "d"];
let newLength = letters.unshift("a");
console.log(newLength); // Output: 4
console.log(letters); // Output: ["a", "b", "c", "d"]

//7.delete() - removes an element from an array at a specified index and returns true if the operation was successful, or false if the index is out of bounds.

let fruits2 = ["apple", "banana", "orange"];
let deleteResult = delete fruits2[1];
console.log(deleteResult); // Output: true
console.log(fruits2); // Output: ["apple", undefined, "orange"] 
console.log(fruits2.length); // Output: 3 (the length remains the same, but the element at index 1 is now undefined )

let nums = [1, 2, 3, 4, 5];
let deleteResult2 = delete nums[1];
console.log(deleteResult2); // Output: true
console.log(nums); // Output: [1, undefined, 3, 4, 5]
console.log(nums.length); // Output: 5 (the length remains the same, but the element at index 1 is now undefined)   

//8.concat() - merges two or more arrays and returns a new array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6] 

let arr1    = ["a", "b", "c"];  
let arr2    = ["d", "e", "f"];  
let arr3    = ["g", "h", "i"];
let mergedArray2 = arr1.concat(arr2, arr3);
console.log(arr1, arr2, arr3, mergedArray2); // Output: ["a", "b", "c", "d", "e", "f", "g", "h", "i"] 

//9.sort() - sorts the elements of an array in place and returns the sorted array.

let numbers2 = [30, 100, 400, 400000, 1, 5, 9];
numbers2.sort();
console.log(numbers2); 

let fruits3 = ["banana", "apple", "cherry"];
fruits3.sort();
console.log(fruits3); // Output: ["apple", "banana", "cherry"]

//compare function for sorting numbers in ascending order
let numbers3 = [30, 100, 400, 400000, 1, 5, 9];
numbers3.sort(function(a, b) {
    return a - b;
});
console.log(numbers3); // Output: [1, 5, 9, 30, 100, 400, 400000]

//compare function for sorting numbers in descending order
let numbers4 = [30, 100, 400, 400000, 1, 5, 9];
numbers4.sort(function(a, b) {
    return b - a;
});
console.log(numbers4); // Output: [400000, 400, 100, 30, 9, 5, 1]

//10.reverse() - reverses the order of the elements in an array in place and returns the reversed array.

let numbers5 = [1, 2, 3, 4, 5];
numbers5.reverse();
console.log(numbers5); // Output: [5, 4, 3, 2, 1]

let fruits4 = ["apple", "banana", "cherry"];
fruits4.reverse();
console.log(fruits4); // Output: ["cherry", "banana", "apple"]

//11.splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let fruits5 = ["apple", "banana", "cherry", "date"];
fruits5.splice(1, 2, "kiwi", "mango");
console.log(fruits5); // Output: ["apple", "kiwi", "mango", "date"]

let numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(2, 1, 6, 7);
console.log(numbers6); // Output: [1, 2, 6, 7, 4, 5]     

const logs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = logs.splice(5, 7, 2202, 2204);
console.log(ans); // Output: [6, 7, 8, 9, 10] //returns the removed elements and modifies the original array
console.log(logs); // Output: [1, 2, 3, 4, 5, 2202, 2204]

//12.slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.   

let range = [1, 2, 3, 4, 5];
let slicedRange = range.slice(1, 4);
console.log(slicedRange); // Output: [2, 3, 4]
console.log(range); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

let letters2 = ["a", "b", "c", "d", "e"];
let slicedLetters = letters2.slice(2);
console.log(slicedLetters); // Output: ["c", "d", "e"]
console.log(letters2); // Output: ["a", "b", "c", "d", "e"] (original array remains unchanged)