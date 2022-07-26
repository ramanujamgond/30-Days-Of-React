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