// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Leo";
dog.legs = 4;
dog.color = "brown";
dog.age = 1;
dog.bark = function () {
    return "woof woof";
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "American Bully";

dog.getDogInfo = function () {
    return console.log(`The dog name is ${dog.name}, he is ${dog.age} years old and the breed is ${dog.breed}`);
}

console.log(dog.getDogInfo());