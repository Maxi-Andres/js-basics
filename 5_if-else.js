// Uso de if-else para condiciones simples
let age = 20;

if (age >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Uso de if-else if-else para múltiples condiciones
let score = 85;

if (score >= 90) {
    console.log("Excelente");
} else if (score >= 75) {
    console.log("Bueno");
} else if (score >= 50) {
    console.log("Regular");
} else {
    console.log("Necesitas mejorar");
}

// Uso de un switch para evaluar diferentes valores de una variable
let day = 3;

switch (day) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");  // si no pones break hace los bloques de abajo
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Fin de semana");
        break;
}

// Uso de un switch con valores string
let fruit = "manzana";

switch (fruit) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "banana":
        console.log("Es una banana");
        break;
    case "pera":
        console.log("Es una pera");
        break;
    default:
        console.log("Fruta no reconocida");
        break;
}

// Comparación estricta en switch
let num = "2"; // Tipo string

switch (num) {
    case 2: // Comparación estricta (no coincide porque num es string)
        console.log("Es un número 2 (number)");
        break;
    case "2": // Coincide porque es string
        console.log("Es un número 2 (string)");
        break;
    default:
        console.log("No es un 2");
        break;
}

// Uso de if para validaciones con operadores lógicos
let temperature = 25;

if (temperature < 10) {
    console.log("Hace mucho frío");
} else if (temperature >= 10 && temperature < 20) {
    console.log("Hace frío");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Temperatura agradable");
} else {
    console.log("Hace mucho calor");
}
