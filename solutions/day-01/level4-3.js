// Write a program which tells the number of days in a month.

let captureMonth = prompt("Enter the month");

switch (captureMonth.toLowerCase()) {
    case "january ":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "february ":
        console.log(`${captureMonth.toLowerCase()} has 28 days`);
        break;
    case "march":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "april":
        console.log(`${captureMonth.toLowerCase()} has 30 days`);
        break;
    case "may":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "june":
        console.log(`${captureMonth.toLowerCase()} has 30 days`);
        break;
    case "july":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "august":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "september ":
        console.log(`${captureMonth.toLowerCase()} has 30 days`);
        break;
    case "October":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    case "november":
        console.log(`${captureMonth.toLowerCase()} has 30 days`);
        break;
    case "december":
        console.log(`${captureMonth.toLowerCase()} has 31 days`);
        break;
    default:
        console.log("Invalid Month!")
}