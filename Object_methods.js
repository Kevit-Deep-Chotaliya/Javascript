const user = {
  name: "Alice",
  role: "Engineer",
  level: 3
};

// ----------------------------------------------------
// Prototype Methods (called on the instance)
// ----------------------------------------------------

// .hasOwnProperty()
// Checks if the object has the specified property as its own (not inherited)
console.log(user.hasOwnProperty("name"));      // true
console.log(user.hasOwnProperty("toString"));  // false (inherited from Object.prototype)

// .valueOf()
// Returns the primitive value of the object (by default, returns the object itself)
console.log(user.valueOf());                  // { name: "Alice", role: "Engineer", level: 3 }


// ----------------------------------------------------
// Static Object Class Methods
// ----------------------------------------------------

// Object.assign()
// Copies all enumerable own properties from one or more source objects to a target object
const preferences = { theme: "dark", notifications: true };
const mergedUser = Object.assign({}, user, preferences, { active: true });

console.log(mergedUser);
// {
//   name: "Alice",
//   role: "Engineer",
//   level: 3,
//   theme: "dark",
//   notifications: true,
//   active: true
// }

// Object.keys()
// Returns an array of an object's own enumerable property names (keys)
const keys = Object.keys(user);
console.log(keys); 
// ["name", "role", "level"]

// Object.entries()
// Returns an array of an object's own enumerable string-keyed [key, value] pairs
const entries = Object.entries(user);
console.log(entries);
// [
//   ["name", "Alice"],
//   ["role", "Engineer"],
//   ["level", 3]
// ]