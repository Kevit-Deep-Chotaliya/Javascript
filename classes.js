//Classes with Instances and Inheritance

class Dog {
    // constructor: A special method that runs automatically to initialize a new object instance.
    constructor(name, breed) {

        // this: Refers to the current object instance being created or executed.
        this._name = name; 
        this._breed = breed;
        this._behavior = 0;
    }

    // get: Defines a getter method that allows a property to be read like a variable without parentheses.
    get name() {
        return this._name;
    }

    get breed() {
        return this._breed;
    }

    get behavior() {
        return this._behavior;
    }

    // set: Defines a setter method that runs custom logic whenever a property is assigned a value using '='.
    set addBreed(type) {
        this._breed = type;
    }

    incrementBehvaior() {
        this._behavior++;
    }

    bark() {
        console.log(`${this._name} says Woof    `);
    }
}

//Instance

// new: Keyword that creates an instance (a concrete object) from a class blueprint.
const dog1 = new Dog('sheru');
console.log(dog1.name);
console.log(dog1.behavior);

dog1.incrementBehvaior();
console.log(dog1.behavior);

const dog2 = new Dog('pug', 'Germen Shepherd');
console.log(dog2._name);
console.log(dog2.breed);

dog2.addBreed = 'French Bulldog';
console.log(dog2.breed);

dog2.bark();


//Inheritance
//For Example we create class cat then we have to add many similar properties and methods like same as dog
//so, for that we can create one common class Animal which will be inherited by dog and cat both so that they can access all the properties and methods written in Animal class.

// 1. Parent class containing shared behavior

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    //A static method belongs to the class itself and is called using the class name, not an object.
    static info() {
        console.log("Animals are living beings");
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    // Shared method available to all animals
    makeSound(sound) {
        console.log(`${this._name} says ${sound}!`);
    }

    incrementBehavior() {
        this._behavior++;
    }
}

// 2. Dog class inheriting from Animal

// extends: Connects a child class to a parent class to inherit its properties and methods.
class NewDog extends Animal {
    constructor(name, breed) {

        // super: Calls the parent class constructor to set up inherited fields before using 'this'.
        super(name);
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

    // Dog-specific method that uses the shared logic
    bark() {
        this.makeSound("Woof");
    }
}

// 3. Cat class inheriting from Animal

class Cat extends Animal {
    constructor(name, isIndoor) {
        super(name); // Calls the Animal constructor
        this._isIndoor = isIndoor;
    }

    // Cat-specific method that uses the shared logic
    meow() {
        this.makeSound("Meow");
    }
}

const dog3 = new NewDog("Sheru", "German Shepherd");
const cat = new Cat("Milo", true);

// Shared method from Animal
dog3.bark(); // "Sheru says Woof!"
cat.meow(); // "Milo says Meow!"

// Shared state manipulation
dog3.incrementBehavior();
cat.incrementBehavior();

console.log(dog3.behavior); // 1
console.log(cat.behavior); // 1

Animal.info() //works because created in class Animal
cat.info() // TypeError : because static methods can not be accessed by instances.