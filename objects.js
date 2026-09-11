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


//we can add methods inside objects and then access them

const student1 = {
    name: "Samay",
    age: 20,

    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

student1.greet();

//we can also write in shorthand like we don't need to write function.

const account = {
    owner : 'Jay',
    balance : 50000,

    deposit (amount) {
        this.balance += amount;
    },

    withdraw (amount) {
        this.balance -= amount;
    }
};

account.deposit(10000);
console.log(account.owner + "'s balance is " + account.balance);

//Nested Objects 

const company = {
    name: "TechSoft",

    manager: {
        name: "Rahul",
        department: "Development",

        introduce() {
            console.log("I am " + this.name);
        }
    },

    office: {
        city: "Rajkot",
        address: {
            building: "A-101",
            floor: 3
        }
    },

    equipment: {
        laptop: {
            brand: "Dell",
            ram: "16GB"
        },

        "extra-device": {
            brand: "HP",
            type: "Monitor"
        }
    }
};

//Object.freeze(company); //existing properties cannot be changed, new properties cannot be added, and existing properties cannot be deleted

//Object.seal(company);//Object.seal() stops new properties from being added and existing properties from being deleted. However, you can still modify the value of existing properties.

//Object.preventExtensions(company) // Object.preventExtensions() is the least restrictive option. It solely prevents adding new properties. You are completely free to edit values or delete existing properties. 

company.name = 'Techsoft'
company.manager.id = 313
//delete company.name
company.office.type = 'new'
console.log(company)


console.log(company.name);
// TechSoft

console.log(company.manager.name);
// Rahul

console.log(company.manager.department);
// Development

console.log(company.office.address.floor);
// 3

console.log(company.equipment.laptop.ram);
// 16GB

console.log(company.equipment["extra-device"].brand);
// HP

//pass by Reference

const employee = {
    name : 'jay',
    id : 313,
    department : 'services',
    batch : 2
};

// console.log(employee)

//
let reAssignment = obj => {
    obj = {
        id : 521,
        name : 'rahul'
    }                   // obj now points elsewhere
    console.log(obj)
};

let mutate = obj => {

    obj.id = 521;
    obj.name = 'rahul'; //reaches into the same object
    
    console.log(obj)
};

reAssignment(employee)
console.log(employee) // employee unchanged

mutate(employee)
console.log(employee) //employee changed

console.log(typeof(employee))
console.log(typeof(Object))
console.log(typeof(mutate))

//this keyword with normal and arrow function

//Normal function
//In a normal function, this refers to the object that calls the function (animal).

const animal = {
    name: "Tommy",
    age: 3,
    color: "Brown",

    eat: function () {
        console.log(this.name + " is eating.");
    },

    sleep: function () {
        console.log(this.name + " is sleeping.");
    },

    introduce: function () {
        console.log(
            "My name is " + this.name +
            ", I am " + this.age + " years old, and I am " + this.color + "."
        );
    }
};

animal.eat();
animal.sleep();
animal.introduce();

//with arrow function
//In an arrow function, this does not refer to animal; it inherits this from the surrounding scope.

const animal1 = {
    name: "Tommy",
    age: 3,

    eat: () => {
        console.log(this.name + " is eating");
    },

    sleep: () => {
        console.log(this.name + " is sleeping");
    }
};

animal1.eat();
animal1.sleep();


//getter methods

const person2 = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: without parenthesis
console.log(person2.fullName); // 'John Doe'

//setter methods

const person4 = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

person4.age = 'forty-five';
console.log(person4._age);


//to call a setter method - without parenthesis
person4.age = 40;
console.log(person4._age)

//factory functions 

const Items = (id, name, type, price) => {
    return {
        id,      //Property value shorthand -> instead of id : id we directly use id only
        name,
        type,
        price,

        bill() {
            console.log(`${price + 100}`);
        }
    }
}

console.log(Items)

//we can add variables values like this in factory functions and then call method also

const ans = Items(1002, 'watch', 'smartwatch', 20000);
console.log(ans)
ans.bill()

//Destructured Assignment - Object destructuring extracts properties directly from an object, including properties from a nested object.

const Icecream = {
    name : 'Hocco',
    flavor : 'Mango',
    type : 'aamchi',
    price : 180,

    company : {
        company_name : 'Vadilal',
        product_count : 12,
        year : 1998
    }

}

const {name, flavor, type, price} = Icecream;
const { company_name, product_count, year } = Icecream.company;

console.log(name);
console.log(flavor);
console.log(type);
console.log(price);
console.log(company_name);
console.log(product_count);
console.log(year);


