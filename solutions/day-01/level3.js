// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort();
console.log(sortedAges);

const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age(one middle item or two middle items divided by two) 
console.log("Minimum age is: ", minAge);
console.log("Maximum age is: ", maxAge);

const mediabAge = sortedAges[sortedAges.length / 2];

console.log(mediabAge);

// Find the average age(all items divided by number of items)
let total = 0;
for (let i = 0; i < sortedAges.length; i++) {
    total = + sortedAges[i];
}

console.log("Average age: ", Math.floor(total / sortedAges.length));

// Find the range of the ages(max minus min)
console.log(maxAge - minAge);

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(maxAge - minAge));

// Slice the first ten countries from the countries array
// import country array list 
import countryList from "./countries.js";

const updatedCountryList = countryList.slice(0, 10);

console.log(updatedCountryList);

// Find the middle country(ies) in the countries array
const middleArrayItem = Math.floor(countryList.length / 2);

console.log(countryList[middleArrayItem]);