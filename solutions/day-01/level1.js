// Declare an empty array;
const arr = Array();

// Declare an array with more than 5 number of elements
const fiveArrayItems = Array(5).fill("items");

// Find the length of your array
const lengthOfArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(lengthOfArray.length);

// Get the first item, the middle item and the last item of the array
const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("The first item of the array", arrayData[0]);
console.log("The middle item of the array", arrayData[Math.floor(arrayData.length / 2) - 1]);
console.log("The last item of the arrray", arrayData[arrayData.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["David", 56, true, { name: "david", age: 25 }, false, 89, NaN];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()
const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(oddNumber);

// Print the number of companies in the array
console.log(itCompanies);

// Print the first company, middle and last company
console.log("First Company: ", itCompanies[0]);
console.log("Second Compnay: ", itCompanies[Math.floor(itCompanies.length / 2) - 1]);

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
itCompanies.splice(6, "", "and");
console.log(itCompanies.concat("are big IT companies").toString());

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyExist = itCompanies.indexOf("Apple");
// if (companyExist != -1) {
//     console.log(itCompanies[companyExist]);
// } else {
//     console.log("Company is not found");
// }

// or

(companyExist != -1) ? console.log(itCompanies[companyExist]) : console.log("Company is not found");


// Filter out companies which have more than one 'o' without the filter method
const itCompanyNames = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const companyNamesWithO = [];

for (let i = 0; i < itCompanyNames.length; i++) {
    const checkO = itCompanyNames[i];
    let count = 0;
    for (let j = 0; j < checkO.length; j++) {
        if (checkO[j].toLowerCase() === "o") {
            count++;
        }
    } if (count > 1) {
        companyNamesWithO.push(checkO);
    }
}

console.log("Company Name with O: ", companyNamesWithO);

// Sort the array using sort() method
const compName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(compName.sort());

// Reverse the array using reverse() method
console.log(compName.reverse());

// Slice out the first 3 companies from the array
const compNames = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const firtThree = compNames.slice(0, 3);
console.log(firtThree);

// Slice out the last 3 companies from the array
console.log(compNames.slice(-3));

// Slice out the middle IT company or companies from the array
const middleItCompnany = compNames.slice((compNames.length / 2), (compNames.length / 2) + 1);
console.log(middleItCompnany);

// Remove the first IT company from the array
console.log(compNames.splice(0, 1));

// Remove the middle IT company or companies from the array
const compItNames = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(compItNames.splice(((compItNames.length / 2) - 1), 1));

// Remove the last IT company from the array
console.log(compItNames.splice((compItNames.length - 1)));

// Remove all IT companies
console.log(compItNames.splice());
