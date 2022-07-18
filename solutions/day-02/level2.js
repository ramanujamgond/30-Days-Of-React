// Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
]);

console.log(result);

// Count logged in users, count users having greater than equal to 50 points from the following object.
const usersData = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const usersDataValue = Object.values(usersData);

let count = 0;
let pointCount = 0;

for (const key in usersDataValue) {
    if (usersDataValue[key].isLoggedIn === true) {
        count++;
    }
    if (usersDataValue[key].points >= 50) {
        pointCount++;
    }
}

console.log(`Number of logged in users are: ${count} and users having greater than equal to 50 points are: ${pointCount}`);

// Find people who are MERN stack developer from the users object
const findMERNuser = Object.entries(usersData);
findMERNuser.forEach((user) => {
    user[1].skills.forEach((skill) => {
        if (skill === "MERN") {
            console.log(user[0]);
        }
    });
});

//Set your name in the users object without modifying the original users object
let addNewUser = Object.assign(usersData);
addNewUser = { ...addNewUser, Ramanujam: { email: 'rama@rama.com', skills: ['HTML', 'CSS'], age: 30, isLoggedIn: true, points: 500 } };
console.log(addNewUser);

// Get all keys or properties of users object
const getAllKey = Object.keys(users);
console.log(`All keys: ${getAllKey}`);

// Get all the values of users object 
const getAllValue = Object.values(users);
console.log(getAllValue);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
    name: "India",
    capital: "New Delhi",
    populations: "138 Crores",
    languages: "Hindi"
}

console.log(countries.name);
console.log(countries.capital);
console.log(countries.populations);
console.log(countries.languages);
