// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Ramanujam", "Gond"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(addNumbers(2, 22));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function _areaOfCircle(radius) {
    return Math.PI * radius * radius
}

console.log(_areaOfCircle(4.8));


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(degreeCelsius) {
    let degreeFahrenheit = 0;
    return degreeFahrenheit = (degreeCelsius * (9 / 5) + 32);
}

console.log(convertCelciusToFahrenheit(32));


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// underweight
let bmi = 0;
function calculatesBmi(weight, height) {
    bmi = weight / (height * height);
    if (bmi < 18.5) {
        console.log(`The Person is underweight and bmi is: ${bmi}`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`The person have a normal weight ${bmi}`);
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`The person is overweight ${bmi}`);
    } else if (bmi >= 30) {
        console.log(`The person is obese ${bmi}`);
    } else {
        console.log("Invalid BMI");
    }
}

let weight = 82;
let height = 1.7;

calculatesBmi(weight, height);