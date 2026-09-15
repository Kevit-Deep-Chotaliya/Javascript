# JavaScript Learning Notes

A small collection of JavaScript experiments and practice programs created while learning the language from the basics. The examples are written for Node.js and are intentionally focused on one concept at a time.

## What You Will Learn

- Variables, reassignment, data types, and functions
- Arrays, indexing, nesting, mutation, and common array methods
- `for`, `while`, `do...while`, `for...in`, and `for...of` loops
- Callback functions, `map()`, `filter()`, `reduce()`, and method chaining
- Objects, properties, methods, nested data, and dynamic property access
- `this`, getters, setters, factory functions, and object destructuring
- Small problem-solving exercises using arrays, objects, and user input

## Requirements

- [Node.js](https://nodejs.org/) installed
- npm, which is included with Node.js

Check your installation:

```bash
node --version
npm --version
```

## Setup

Most files use only built-in JavaScript features. `practice.js` additionally uses `prompt-sync` for terminal input.

```bash
npm install
```

## Learning Path

Read and run the files in this order:

### 1. Basics and functions

#### `demo.js`

Introduces function calls, local variables, return values, array creation, zero-based indexing, and updating an array item.

#### `example.js`

Explores variable shadowing inside a function, the `typeof` operator, and string indexing. The unusual code is useful for observing how name resolution works, but it is best treated as an experiment rather than a recommended style.

### 2. Loops and function values

#### `loops.js`

Covers:

- `for` loops and nested loops
- `while` and `do...while` loops
- Iterating over object keys with `for...in`
- Iterating over array values with `for...of`
- Comparing values in two arrays
- `typeof` results for values such as `NaN`, `undefined`, and `null`
- Functions stored in variables
- Passing functions as arguments
- Returning functions from other functions

The final examples demonstrate a closure: `multiplier(2)` creates a function that remembers the factor `2`.

### 3. Array fundamentals

#### `practice.js`

Provides short exercises for finding the last item, converting arrays to strings, checking the return values of `push()` and `pop()`, accessing nested arrays, and understanding how `const` and `let` behave with mutable arrays.

#### `Array_methods.js`

Demonstrates frequently used array methods:

| Method | Purpose |
| --- | --- |
| `push()` / `pop()` | Add or remove items at the end |
| `shift()` / `unshift()` | Remove or add items at the beginning |
| `toString()` / `join()` | Convert array values into a string |
| `concat()` | Create a combined array |
| `sort()` | Sort an array in place, with comparator examples for numbers |
| `reverse()` | Reverse an array in place |
| `splice()` | Remove, replace, or insert items in place |
| `slice()` | Copy part of an array without changing the original |
| `delete` | Create an empty slot without changing array length |

### 4. Array iteration and transformation

#### `Array_loops.js`

Builds on arrays with:

- `forEach()` for running code for every item
- `Array.from()` for converting strings and sets into arrays
- `for...of` for values and `for...in` for indexes
- `map()` for creating transformed arrays
- `filter()` for keeping matching values
- `reduce()` for producing one value, such as a sum
- Callback functions stored separately and passed to iterators
- Chaining `map()` and `filter()`
- Flattening a two-dimensional array with `reduce()` and `concat()`
- Iterating over nested object data

### 5. Objects

#### `objects.js`

Explores object fundamentals and more advanced object behavior:

- Dot notation and bracket notation
- Dynamic property access with `object[propertyName]`
- Adding, updating, and deleting properties
- Object methods and method shorthand
- Nested objects
- `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` examples
- Mutation versus reassignment when objects are passed to functions
- `this` in normal functions compared with arrow functions
- Getter and setter methods
- Factory functions and property shorthand
- Object destructuring, including nested properties

#### `Object_methods.js`

Demonstrates object prototype methods and static methods:

- `hasOwnProperty()` to check an object's own properties
- `valueOf()` to obtain an object's primitive value behavior
- `Object.assign()` to merge objects
- `Object.keys()` to get property names
- `Object.entries()` to get key-value pairs

### 6. Practice programs

#### `programs.js`

Applies array methods to small problems:

- Filtering even numbers
- Reading numbers until the user enters `0`
- Filtering numbers divisible by `10`
- Creating an array of squares with `map()`
- Calculating a factorial with `reduce()`
- Accessing object properties with dot and bracket notation

## How to Run an Example

From this directory, run any file with Node.js:

```bash
node demo.js
node loops.js
node Array_methods.js
node Array_loops.js
node objects.js
node Object_methods.js
node practice.js
node programs.js
```

`practice.js` and `programs.js` may pause and ask for input. Enter a number in the terminal; enter `0` in the repeated-input exercise to finish.

## Important JavaScript Notes

- Array indexes start at `0`, so index `2` is the third item.
- `map()`, `filter()`, and `slice()` return new arrays. Methods such as `sort()`, `reverse()`, `splice()`, `push()`, and `pop()` modify the original array.
- Calling `sort()` without a comparator sorts values as strings. Use `(a, b) => a - b` for numeric ascending order.
- `delete array[index]` leaves an empty slot and preserves the array length. Use `splice()` when an item should be removed and later indexes should move.
- `const` prevents reassignment of a variable, but it does not make an array or object immutable.
- Dot notation uses a literal property name. Bracket notation is needed when the property name is stored in a variable or contains characters such as `-`.
- Normal object methods receive the calling object as `this`; arrow functions do not create their own `this`.
- `typeof null` returns `"object"`, which is a historical JavaScript behavior.

## Suggested Practice

After running each file, change the values and predict the output before running it again. Good next exercises are:

1. Add a new array method example such as `find()`, `some()`, or `every()`.
2. Rewrite one loop in terms of `map()`, `filter()`, or `reduce()`.
3. Create an object for a product and add methods for updating its price and stock.
4. Split the practice programs into reusable functions that accept arguments instead of relying on hard-coded values.
