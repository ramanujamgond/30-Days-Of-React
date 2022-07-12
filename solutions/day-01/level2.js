// import country array list 
import countryList from "./countries.js";

// import web technology array list
import webTech from "./web_techs.js";

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const word = text.split(" ");
console.log(word);
console.log(word.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
// for (let i = 0; i < shoppingCart.length; i++) {
//     if (shoppingCart[i] === "Honey") {
//         shoppingCart.splice(i, 1);
//     }
// }

// or 
let i = 0;
while (i < shoppingCart.length) {
    if (shoppingCart[i] === "Honey") {
        shoppingCart.splice(i, 1);
    } else {
        i++;
    }
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === "Tea") {
        shoppingCart[i] = "Green Tea";
    }
}
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
for (let i = 0; i < countryList.length; i++) {
    if (countryList.indexOf("Ethiopia") != -1) {
        console.log("ETHIOPIA");
        break;
    } else {
        countryList.push("Ethiopia");
        console.log(countryList);
        break;
    }
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let initial = 0;
while (initial < webTech.length) {
    if (webTech.indexOf("Sass") != -1) {
        console.log("Sass is a CSS preprocess");
        break;
    } else {
        webTech.push("Sass");
        console.log(webTech);
        break;
    }
    initial++;
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
