// callback = A function that is passed as a argument to another function to guarantee that
// one function is executed after the other to ensure that this is the order in case the 
// first function takes too long to execute.

// Ejemplo 1: Uso de callback
function greet(name, callback) {
    console.log("Hola " + name);
    callback(); // Ejecutamos la función callback
}

function sayGoodbye() {
    console.log("Adiós");
}

// Llamamos a greet con una callback
greet("Carlos", sayGoodbye);

// Ejemplo 2: setTimeout y clearTimeout
console.log("Inicio");

// Programamos un mensaje después de 3 segundos
const timeoutId = setTimeout(() => {
    console.log("Esto se ejecuta después de 3 segundos");
}, 3000);

// Esto es usando funcion anonima
setTimeout(function() {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

// Cancelamos el timeout antes de que se ejecute
clearTimeout(timeoutId);
console.log("Timeout cancelado");

// Ejemplo 3: setInterval y clearInterval
let counter = 0;

// Programamos un intervalo que incrementa el contador cada segundo
const intervalId = setInterval(() => {
    counter++;
    console.log(`Contador: ${counter}`);
    if (counter === 5) {
        console.log("Deteniendo el intervalo");
        clearInterval(intervalId); // Detenemos el intervalo al alcanzar 5
    }
}, 1000);

