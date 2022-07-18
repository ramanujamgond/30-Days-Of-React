// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: "Biki",
    lastName: "Das",
    incomes: [
        {
            incomes: 12223,
            description: "Some Text"
        },
        {
            incomes: 25689,
            description: "Some Text"
        },
        {
            incomes: 56895,
            description: "Some Text"
        },
        {
            incomes: 25698,
            description: "Some Text"
        }
    ],
    expenses: [
        {
            incomes: 543,
            description: "Some Descrtiption"
        },
        {
            incomes: 345,
            description: "Some Descrtiption"
        },
        {
            incomes: 236,
            description: "Some Descrtiption"
        },
        {
            incomes: 876,
            description: "Some Descrtiption"
        },
        {
            incomes: 456,
            description: "Some Descrtiption"
        }
    ],
    totalIncome: function () { },
    totalExpense: function () { },
    accountInfo: function () { },
    addIncome: function () { },
    addExpense: function () { },
    accountBalance: function () { }
}

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (newUserEmail) => {
    users.forEach((userInfo) => {
        if (userInfo.email === newUserEmail) {
            alert("User already exist!");
        } else {
            users
        }
    });
}

let newUser = "martha@martha.com";

signUp(newUser);