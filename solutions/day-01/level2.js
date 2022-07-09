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
const addedItemonStart = shoppingCart.unshift(1, 2);

console.log(addedItemonStart);