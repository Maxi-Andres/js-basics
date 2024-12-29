// Math.abs() - Devuelve el valor absoluto de un número
console.log(Math.abs(-5)); // 5

// Math.ceil() - Redondea un número hacia arriba
console.log(Math.ceil(4.2)); // 5

// Math.floor() - Redondea un número hacia abajo
console.log(Math.floor(4.8)); // 4

// Math.round() - Redondea un número al entero más cercano
console.log(Math.round(4.5)); // 5

// Math.trunc() - Elimina los decimales de un número
console.log(Math.trunc(4.123)); // 4

// Math.max() - Devuelve el número más grande de los argumentos
console.log(Math.max(3, 1, 4, 7, 2)); // 7

// Math.min() - Devuelve el número más pequeño de los argumentos
console.log(Math.min(3, 1, 4, 7, 2)); // 1

// Math.pow() - Devuelve el primer número elevado a la potencia del segundo número
console.log(Math.pow(2, 3)); // 8

// Math.sqrt() - Devuelve la raíz cuadrada de un número
console.log(Math.sqrt(16)); // 4

// Math.random() - Devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive)
console.log(Math.random()); // Un número aleatorio entre 0 y 1

// Math.PI - Devuelve el valor de pi
console.log(Math.PI); // 3.141592653589793

// Math.sin() - Devuelve el seno de un ángulo (en radianes)
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos() - Devuelve el coseno de un ángulo (en radianes)
console.log(Math.cos(Math.PI)); // -1

// Math.log() - Devuelve el logaritmo natural (base e) de un número
console.log(Math.log(10)); // 2.302585092994046

// Math.log10() - Devuelve el logaritmo en base 10 de un número
console.log(Math.log10(100)); // 2

// Número aleatorio entre dos valores (Min y Max, inclusive)
let min = 1;
let max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Número aleatorio entre 1 y 10, ambos inclusive
//! si o si es math floor

// Número entero aleatorio entre min (inclusive) y max (exclusive)
const randomIntExclusive = Math.floor(Math.random() * (max - min) + min);
console.log(randomIntExclusive); // Entre 1 y 9

// Número flotante aleatorio entre min y max
const randomFloat = Math.random() * (max - min) + min;
console.log(randomFloat); // Flotante entre 1 y 10

// Generar un color hexadecimal aleatorio
const randomHexColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
console.log(randomHexColor); // Ejemplo: #1a3f5b

// Generar un valor booleano aleatorio
const randomBoolean = Math.random() < 0.5;
console.log(randomBoolean); // true o false
