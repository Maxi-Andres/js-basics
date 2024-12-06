// desctructuring = extract values form arrays and object, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

// ==================================

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

// ==================================

const [firstColor, secondColor, thirdColor, ...extraColors] = colors

console.log(firstColor, secondColor, thirdColor, extraColors);

// ==================================

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;   // podes poner valores defualt por si no lo tiene
console.log(firstName, lastName, age, job);

displayPerson(person1);

function displayPerson({firstName, lastName, age, job}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

