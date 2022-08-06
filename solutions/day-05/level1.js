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

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    constructor(ages) {
        this.ages = ages;
    }

    countTheItems() {
        return console.log(`Count: ${this.ages.length}`)
    }

    sumTheItems() {
        let sum = 0;
        for (let i = 0; i < this.ages.length; i++) {
            sum += ages[i];
        }
        return console.log(`Sum: ${sum}`);
    }

    minFromArray() {
        let min = this.ages[0];
        for (let i = 0; i < this.ages.length; i++) {
            if (this.ages[i] < min) {
                min = this.ages[i];
            }
        }
        return console.log(`Min: ${min}`);
    }

    maxFromArray() {
        let max = this.ages[0];
        for (let i = 0; i < this.ages.length; i++) {
            if (this.ages[i] > max) {
                max = this.ages[i];
            }
        }
        return console.log(`Max: ${max}`);
    }

    rangeOfArray() {
        let min = this.ages[0];
        let max = this.ages[0];
        for (let i = 0; i < this.ages.length; i++) {
            if (this.ages[i] < min) {
                min = this.ages[i];
            }

            if (this.ages[i] > max) {
                max = this.ages[i];
            }
        }

        return console.log(`Range: ${max - min}`);
    }

    meanOfArray() {
        let total = 0;
        for (let i = 0; i < this.ages.length; i++) {
            total += ages[i];
        }
        return console.log(`Mean: ${Math.floor(total / ages.length)}`)
    }

    describe() {
        this.countTheItems();
        this.sumTheItems();
        this.minFromArray();
        this.maxFromArray();
        this.rangeOfArray();
        this.meanOfArray();
        return 0;
    }
}

const statistics = new Statistics(ages);

console.log(statistics.describe());