// Tipos primitivos en JavaScript (primitive data types)

// 1. string: Representa cadenas de texto.
let texto = "Hola, mundo";

// 2. number: Representa números, ya sean enteros o flotantes.
let entero = 42;
let flotante = 3.14;

// 3. bigint: Representa números enteros de tamaño arbitrario.
let numeroGrande = 1234567890123456789012345678901234567890n; // termina con n

// 4. boolean: Representa un valor lógico (true o false).
let esVerdadero = true;

// 5. undefined: Variable declarada pero sin valor asignado.
let sinValor;
console.log(sinValor); // undefined

// 6. null: Representa un valor nulo o vacío.
let valorNulo = null;

// 7. symbol: Identificador único.
let simbolo = Symbol("descripcion");

// Tipos primitivos son inmutables y se pasan por valor:
var a = 10;
let b = a; // Se copia el valor.
b = 20;
console.log(a); // 10 (no cambia porque los primitivos son independientes).

// let y const tienen un ámbito de bloque, lo que significa que no puedes declarar la misma variable más de una vez en el mismo bloque.
// var, en cambio, sí permite la redeclaración porque tiene un ámbito de función (aunque esto puede causar problemas en el código).

// =============================================================================================

// Declaración de variables en JavaScript

// let: Variable de ámbito de bloque, reasignable, pero no redeclarable en el mismo bloque.
// const: Variable de ámbito de bloque, no reasignable, ni redeclarable, aunque los objetos pueden ser modificados internamente.
// var: Variable de ámbito de función, reasignable y redeclarable, pero su uso es propenso a errores (evitar en código moderno).

// 1. let: Permite reasignación, tiene ámbito de bloque y evita problemas con hoisting.
let x = 10;
x = 20; // Esto funciona
if (true) {
    let x = 30; // Esta variable es independiente del x de fuera.
    console.log(x); // 30
}
console.log(x); // 20

// 2. const: No permite reasignación, pero puedes modificar las propiedades de un objeto.
const y = 30;
// y = 40; // Error: no se puede reasignar

const obj = { nombre: "Juan" };
obj.nombre = "María"; // Modificar una propiedad funciona.
console.log(obj.nombre); // "María"

// 3. var: Método antiguo, su ámbito es de función y tiene problemas con el hoisting.
if (true) {
    var z = 50; // Aunque está dentro del bloque, se declara a nivel de función.
}
console.log(z); // 50 (var ignora el ámbito de bloque).

console.log(a); // undefined (hoisting)
var a = 10; // Esto no genera error pero puede ser confuso.

// Buenas prácticas: Usa siempre const cuando el valor no cambie y let si necesitas reasignar.
// Evita usar var a menos que trabajes con código antiguo o necesites compatibilidad especial.

// =============================================================================================

