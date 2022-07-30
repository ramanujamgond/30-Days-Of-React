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

// Use method chaining to get the sum of the prices(map, filter, reduce)
const sumOfPrices = productsList.filter((item) => {
    if (item.price !== "") {
        return item.price;
    }
}).map((item) => {
    return item.price;
}).reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});

console.log("Sum", sumOfPrices);

// another way to chain the map filter and reduce
const totalPrice = productsList
    .map((items) => {
        return items.price;
    })
    .filter((prices) => {
        if (prices !== "") {
            return prices;
        }
    })
    .reduce((sum, price) => {
        return sum + price;
    });

console.log("Total Price amount is:", totalPrice);


// Optimize version of method chaining
let getAmount = (item) => {
    if (item.price !== "") {
        return item.price;
    }
};

let priceAmount = (amount) => {
    return amount.price;
};

let sumOfAmount = (prevValue, curValue) => {
    return prevValue + curValue;
};

const optimizeSum = productsList.filter(getAmount).map(priceAmount).reduce(sumOfAmount);

console.log("Sum of prices is:", optimizeSum);

// Calculate the sum of all the prices using reduce only
const productsListReduce = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const sumUsingReduce = productsListReduce.filter((item) => {
    if (item.price !== "") {
        return item.price;
    }
}).reduce((previousVal, currentVal) => {
    return previousVal + currentVal.price;
}, 0);

console.log("Sum is", sumUsingReduce);

// Find the first product which doesn't have a price value
const noPrice = productsList.find((item) => {
    if (item.price === "") {
        return item;
    }
});

console.log(noPrice);

// Find the index of the first product which does not have price value

const productNoPrice = productsList.findIndex((item) => {
    if (item.price === "") {
        return item;
    }
});

console.log(productNoPrice);

// Check if some products do not have a price value
const someProductNoPrice = productsList.some((item) => {
    if (item.price === "") {
        // return console.log("Yes some products do not have prices");
        return item;
    }
})

console.log(someProductNoPrice);

// Check if all the products have price value
const checkAllPrice = productsList.every((item) => {
    if (item.price !== "") {
        return item;
    }
})

console.log(checkAllPrice);

// Explain the difference between forEach, map, filter and reduce
// forEach -> The forEach method is used only with array and we use forEach if you are interested in each item or index or both.
// map -> We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.
// filter -> The filter method like forEach and map is used with an array and it returns an array of the filtered items.
// reduce -> We use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array.


// Explain the difference between filter, find and findIndex
// filter -> The filter method like forEach and map is used with an array and it returns an array of the filtered items.
// find -> find return the first occurrence of an item instead of an array.
// findIndex -> The findIndex return the index of the first occurrence of an item.


// Explain the difference between some and every
// some -> The some method is used with array and return a boolean. If one or some of the items satisfy the criteria the result will be true else it will be false. Let us see it with an example.
// every -> The method every is somehow similar to some but every item must satisfy the criteria. The method every like some returns a boolean.