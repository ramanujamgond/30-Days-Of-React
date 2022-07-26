// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
    let discriminant = (b * b) - 4 * (a * c);
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    return parseInt(root1);
}

console.log("Quadratic Equation: ", solveQuadratic(1, 4, 4));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arrayData) {
    arrayData.forEach(element => {
        console.log(element);
    });
}

const randomArray = [23, 78, { name: "Ramanujam", age: 29 }, "Priyanka"];

printArray(randomArray);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const date = new Date;
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

function showDateTime() {
    return `Current date and time is: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

console.log(showDateTime(date));

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a, b) {
    // let temp = a;
    // a = b;
    // b = temp;
    [a, b] = [b, a]
    console.log(a, b);
}

swapValues(9, 22);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arrayNumber) {
    let reverseData = [];
    let data = arrayNumber;
    for (let i = data.length - 1; i >= 0; i--) {
        reverseData.push(data[i]);
    }
    console.log("\n");
    return reverseData;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(reverseArray([1, 2, 3, 4, 5]));

console.log(reverseArray(['A', 'B', 'C']));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(element) {
    let capitalArray = [];
    for (let i = 0; i < element.length; i++) {
        capitalArray.push(element[i].toUpperCase());
    }
    return capitalArray;
}

console.log(capitalizeArray(["Ramanjam", "KaiLaSH", "BiKi", "Milan", "Mehdin", "kAmal"]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

let itemLists = [];
function addItem(takeitem) {
    // console.log(takeitem);
    return itemLists.push(takeitem);
}

addItem("DummyText");
addItem(10);
addItem("2 Aug 2022");
addItem("Kailash");
addItem(2022);
addItem(true);

console.log(itemLists);

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const itemToRemove = [76, 45, 12, 90, 1, 21, 35, 15];

function removeItem(index) {
    itemToRemove.splice(index, 1);
    return itemToRemove;
}

console.log(removeItem(6));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

let even = 0;
let odd = 0;

function evensAndOdds(numberRange) {
    let i = 0;
    while (i <= numberRange) {
        if (i % 2 === 0) {
            even++;
        } else {
            odd++;
        }
        i++;
    }
}

evensAndOdds(100);
console.log("The number of odds are ", odd);
console.log("The number of evens are ", even);

// Write a function which takes any number of arguments and return the sum of the arguments
let count = 0;
function sum(...addNumbers) {
    for (let i = 0; i < addNumbers.length; i++) {
        count += addNumbers[i];
    }
    return count;
}

console.log("The sum of inputed numbers are: ", sum(1, 2, 3, 4, 5, 6, 7, 8));


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
    console.log(Math.random().toString(33).slice(2, 9));
}

userIdGenerator();