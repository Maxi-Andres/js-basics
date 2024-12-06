// El operador ternario tiene la siguiente estructura:
// condición ? valorSiVerdadero : valorSiFalso

let age = 20;

// Ejemplo básico con una condición simple
let canVote = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(canVote);  // "You can vote."

// Ejemplo con un número par o impar
let number = 5;
let parity = number % 2 === 0 ? "Even" : "Odd";
console.log(parity);  // "Odd"

// Usar ternario dentro de ternario (anidado)
let timeOfDay = 15;  // 24-hour format
let greeting = timeOfDay < 12
    ? "Good morning"
    : timeOfDay < 18
    ? "Good afternoon"
    : "Good evening";
console.log(greeting);  // "Good afternoon"

// Uso de ternario en una asignación de objeto
let person = {
    name: "Maxi",
    age: 20,
    status: age >= 18 ? "Adult" : "Minor"
};
console.log(person.status);  // "Adult"

// Ejemplo con valores falsy
let userInput = "";
let message = userInput ? "Input provided." : "No input provided.";
console.log(message);  // "No input provided."

// Ejemplo con función usando ternario
function getDiscount(price, isMember) {
    return isMember ? price * 0.9 : price;  // 10% discount for members
}

let price = 100;
let isMember = true;
console.log(getDiscount(price, isMember));  // 90 (10% off)
