//forEach loop

const arr = [5,4,7,8,12,14,15,4,74,25];

arr.forEach( element => {
    console.log(element * element);
})
console.log(arr);

// arr.forEach((element, index, arr) => {
//     console.log(`Element at index ${index} is ${element}`);
// })

//Array.from() used to conert array-like objects to arrays

const str = "Hello World";
const arr1 = Array.from(str);
console.log(arr1);

const set = new Set([1,2,3,4,5]);
const arr2 = Array.from(set);
console.log(arr2);

//for..of loop with arrays

const arr3 = [1,2,3,4,5];

for (let element of arr3) {
    console.log(element);
}

//for..in loop with arrays

const arr4 = [1,2,3,4,5];

for(let element in arr4) {
    console.log(element);//it will print the index of the array elements
}

for(let element in arr4) {
    console.log(arr4[element]);//it will print the array elements
}

//.map() method used to create a new array by applying a function to each element of the original array

const arr5 = [1,2,3,4,5];

const newArr = arr5.map((element, index, array) => { //we can give three parameters to the callback function of map method, first is the element, second is the index of the element and third is the original array    
    console.log(element,index,array);
    return element * 2;
})

console.log(newArr);
console.log(arr5);

//we can chain the map method with other array methods like filter, reduce, etc.

const arr6 = [1,2,3,4,5];

const doubledAndFiltered = arr6.map(num => num * 2).filter(num => num > 3);
console.log(doubledAndFiltered);

//.filter() method used to create a new array with all elements that pass the test implemented by the provided function

const arr7 = [1,2,3,4,5];

const filteredArr = arr7.filter((element) => {
    console.log(element);
    return element > 2;
})

console.log(filteredArr);
console.log(arr7);

//.reduce() method used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

let arr8 = [1,2,3,4,5];

let sum = arr8.reduce((h1,h2) => { 
    return h1 + h2;
});
console.log(sum);

//we can also make function like variable and pass it to the reduce method

const arr9 = [1,2,3,4,5];

const sumFunction = (h1,h2) => {
    return h1 + h2;
}

const sum1 = arr9.reduce(sumFunction);
console.log(sum1);


//Define a callback function before you use it in an iterator.

let nums = [2,4,8,5,-1,-2]
function isNegative(num) {
  return num < 0;
}
let result = nums.filter(isNegative);
console.log(result)

//Use .reduce() to take a multi-layered array and return a single-layer array from scratch.

let numbers = [[1,2], [3,4], [5,6]]

let finalArray = numbers.reduce((val1,val2) => {
    return val1.concat(val2)
},[])
console.log(finalArray)

console.log(typeof(numbers))

console.log(typeof(null))

//Looping through objects

const school = {
    students : {
        student1 : {
            name : 'abhay',
            age : 20
        },
        student2 : {
            name : 'helly',
            age : 18
        }
    }
}

console.log(school)

for (let stu in school.students) {
    console.log(`${stu} : ${school.students[stu].name}`);
}