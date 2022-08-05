// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getAnimalName() {
        let name = this.name;
        return name;
    }

    getAnimalAge() {
        let age = this.age;
        return age;
    }

    getAnimalColor() {
        let color = this.color;
        return color;
    }

    getAnimalLegs() {
        let legs = this.legs;
        return legs;
    }
}

const animal1 = new Animal("Deno", 12, "Brown", 4);

console.log(animal1.getAnimalName());
console.log(animal1.getAnimalAge());
console.log(animal1.getAnimalColor());
console.log(animal1.getAnimalLegs());

// Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    printDogChildClass() {
        console.log("This is a dog child class made out of parent animal class.")
    }
}

class Cat extends Animal {
    printCatChildClass() {
        console.log("This is a cat child class made out of parent animal class.")
    }
}


const dog = new Dog("Leo", 2, "Elephant", 4);

console.log(dog);
console.log(dog.getAnimalName());
console.log(dog.printDogChildClass());

const cat = new Cat("Lila", 8, "White", 4);
console.log(cat);
console.log(cat.printCatChildClass());

// Override the method you create in Animal class

class Mamal extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
        super.getAnimalName();
    }

    getAnimalName() {
        return console.log(`The ${this.name} is ${this.age} years of old`);
    }
}

const mamal = new Mamal("Tilu", 20, "Green", 4);

console.log(mamal);
console.log(mamal.getAnimalName());