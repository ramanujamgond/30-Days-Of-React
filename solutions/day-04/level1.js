// Print the price of each product using forEach
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const printData = products.forEach((item, index, arr) => {
    console.log(item.product, item.price);
});

console.log(printData);

// Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.

const printFormat = products.forEach((item, index, arr) => {
    console.log(`The price of ${item.product} is ${item.price} euros.`);
    // console.log("The price of", item.product + " is " + item.price + " euros.");
});

// Calculate the sum of all the prices using forEach

const productArray = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 }
]

let sum = 0;
productArray.forEach((item) => (sum += item.price));
console.log("Total sum of prices is", sum);

// Create an array of prices using map and store it in a variable prices
const priceData = productArray.map((item, index) => {
    return item.price;
});

console.log(priceData);


// Filter products with prices
const productsList = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const filterProductPrice = productsList.filter((item) => {
    if (item.price !== "") {
        return item.price;
    }
});

console.log(filterProductPrice);