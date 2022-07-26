// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser(char, id) {
    for (let i = 0; i < id; i++) {
        console.log(Math.random().toString(parseInt(36)).slice(2, parseInt(char)));
    }
}

// This code only run on browser console
// let char = prompt(); 
// let id = prompt();
// userIdGeneratedByUser(char, id);

// Write a function generateColors which can generate any number of hexa or rgb colors.
colorArray = [];
function generateColors(colorType, number) {
    let color = "";
    if (colorType === "hexa") {
        for (let i = 0; i < number; i++) {
            color = Math.floor(Math.random() * 16777215).toString(16);
            colorArray.push(`#${color}`);
        }
    } else {
        for (let i = 0; i < number; i++) {
            for (let j = 0; j <= i; j++) {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                color = `rgb(${r}, ${g}, ${b})`;
            }
            colorArray.push(color);
        }
    }
    return colorArray;
}

console.log(generateColors("", 10));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// Shuffled the array using Fisher–Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffleArray([1, 2, 3, 4]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number) {
    return number / 1;
}

console.log(factorial(2));