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