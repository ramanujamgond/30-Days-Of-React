// Write a code which can give grades to students according to theirs scores:
// 90 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

let captureGrade = prompt("Enter student marks: ");

if (captureGrade >= 90 && captureGrade <= 100) {
    console.log("The grade is A");
} else if (captureGrade >= 70 && captureGrade <= 89) {
    console.log("The grade is B");
} else if (captureGrade >= 60 && captureGrade <= 69) {
    console.log("The grade is C");
} else if (captureGrade >= 50 && captureGrade <= 59) {
    console.log("The grade is D");
} else {
    console.log("The grade is F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let captureSeason = prompt("Enter the name of month: ");

switch (captureSeason.toLowerCase()) {
    case "january":
        console.log("The season is Winter");
        break;
    case "february":
        console.log("The season is Winter");
        break;
    case "march":
        console.log("The season is Spring");
        break;
    case "april":
        console.log("The season is Spring");
        break;
    case "may":
        console.log("The season is Spring");
        break;
    case "june":
        console.log("The season is Summer");
        break;
    case "july":
        console.log("The season is Summer");
        break;
    case "august":
        console.log("The season is Summer");
        break;
    case "september":
        console.log("The season is Autumn");
        break;
    case "october":
        console.log("The season is Autumn");
        break;
    case "november":
        console.log("The season is Autumn");
        break;
    case "december":
        console.log("The season is Winter");
        break;
    default:
        console.log("No season selected");
}

// Check if a day is weekend day or a working day. Your script will take day as an input
let checkWeekDay = prompt("What is the day  today? ");

switch (checkWeekDay.toLowerCase()) {
    case "monday":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "tuesday":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "wednesday":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "thursday":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "friday":
        console.log(`${checkWeekDay.toLowerCase()} is a working day`);
        break;
    case "saturday":
        console.log(`${checkWeekDay.toLowerCase()} is a weekend day`);
        break;
    case "sunday":
        console.log(`${checkWeekDay.toLowerCase()} is a weekend day`);
        break;
    case "":
        console.log(`${checkWeekDay.toLowerCase()} is a weekend day`);
        break;
    default:
        console.log("Enter a valid day");
}