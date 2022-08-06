// What is React?
// React is a JavaScript library for building a reusable user interface(UI).

// What is a library?
// libraries enable developers to create modern web designs and attractive user interfaces for web, mobile, desktop, and hybrid apps.

// Write your name in a JSX element and store it in a name variable
const name = <h1>Ramanujam</h1>

// Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

const fullName = "Ramanujam Gond";
const country = "India";
const title = "Mr";
const gender = "Male";
const email = "ramanujam@gmail.com";
const phone = 8756453487;

const userInfo = (
    <>
        <h1>{fullName}</h1>
        <p>{country}</p>
        <p>{title}</p>
        <p>{gender}</p>
        <p>{email}</p>
        <p>{phone}</p>
    </>
)

// Write a footer JSX element

const footer = (
    <footer>
        <p>Copyright @ 2022</p>
    </footer>
)

// Create a style object for the main JSX

const style = {
    backgroundColor: "#ededed",
    fontSize: "2rem",
    color: "red"
}

// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)

const userName = "Test Name";
const aNumber = 567;
const boolean = true;
const arrayData = ["Data1", "Data2", "Data3", "Data4"];

const indentedArray = arrayData.map((item, key) => {
    <li key={key}>{item}</li>
})
const objectData = { name: "RandomName", age: 34 };

const dataElement = (
    <>
        <p>{userName}</p>
        <p>{aNumber}</p>
        <p>{boolean}</p>
        <ul>{indentedArray}</ul>
        <p>{objectData.name}{objectData.age}</p>
    </>
)
