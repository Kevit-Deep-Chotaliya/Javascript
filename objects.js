//object creation and property acess using both dot operator and bracket notation
let person = {
    name : 'joy',
    age : 20,
    email : 'user@example.com'
}

console.log(person.email);
console.log(person['name']);

//using bracket notation, use a variable inside the brackets to select the keys of an object.

let returnProperty = (object,prop) => object[prop];

console.log(returnProperty(person,'age'));

//try using dot operator

let finalProperty = (obj,prop) => obj.prop;

console.log(finalProperty(person,'name'));

// obj.prop looks for a property literally named "prop"; use obj[prop] to access the property stored in the prop variable.
//Use obj[prop] for dynamic property access; obj.prop looks for the literal "prop" property.

//adding or updating values on object

const student = {
    id : 101,
    name : 'rajan',
    roll_no : 10,
    class : 'A'
}

console.log(student);

student.name = 'Samay' //it will update the name property
student.stream = 'Science'; //it will add a new key stream with property 'Science'
delete student['roll_no']; //it will remove the roll_no property
student.marks = [80,90,75,45];
student.result = 'Pass';
delete student.result;

console.log("After updating object : ",student);
