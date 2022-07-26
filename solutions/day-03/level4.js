// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}


function getPersonInfo(person) {
    console.log(person.firstName + " " + person.lastName + " " + "lives in " + person.country + " He is " + person.age + " years old.He is an " + person.job + ". He teaches " + person.skills[0] + ", " + person.skills[1] + ", " + person.skills[2] + ", " + person.skills[3] + ", " + person.skills[4] + ", " + person.skills[5] + ", " + person.skills[6] + ", " + person.skills[7] + " and " + person.skills[8] + ".He speaks " + person.languages[0] + "," + person.languages[1] + " and a little bit of Suomi");
}

getPersonInfo(person);