// Un objeto simple
const dog = {
    name: "Luna",
    age: 5,
    eyeColor: "blue",
};

// Recorrer propiedades del objeto con "for...in"
console.log("Usando for...in:");
for (const key in dog) {
    console.log(key); // Muestra las claves: name, age, eyeColor
}

for (const key in dog) {
    console.log(dog[key]); // Muestra los valores: Luna, 5, blue
}

// Obtener las claves, valores y pares clave-valor con Object.keys, Object.values, y Object.entries
const keys = Object.keys(dog);
console.log("Claves:", keys); // ['name', 'age', 'eyeColor']

const values = Object.values(dog);
console.log("Valores:", values); // ['Luna', 5, 'blue']

const entries = Object.entries(dog);
console.log("Entradas:", entries); // [['name', 'Luna'], ['age', 5], ['eyeColor', 'blue']]

// Diferencia entre Primitive values y Objects
console.log("\n**Primitive values are copied by their value**");
let x = 10; // Valor primitivo
let y = x;  // Copia el valor de x
y += 5;     // Cambiamos y, pero x no cambia
console.log("x:", x); // 10
console.log("y:", y); // 15

console.log("\n**Objects are copied by reference**");
let obj1 = { greeting: "Hola" }; // Objeto
let obj2 = obj1;                 // Copia la referencia (no el valor)
obj2.greeting = "Adiós";         // Cambiar obj2 también afecta a obj1
console.log("obj1:", obj1.greeting); // Adiós
console.log("obj2:", obj2.greeting); // Adiós

// Si queremos copiar un objeto sin compartir la referencia:
console.log("\n**Copiar un objeto sin referencia compartida**");
let obj3 = { greeting: "Hola" };

let obj4 = { ...obj3 }; //! Copiamos el objeto usando el spread operator
obj4.greeting = "Adiós";
console.log("obj3:", obj3.greeting); // Hola
console.log("obj4:", obj4.greeting); // Adiós

let obj5 = Object.assign({}, obj3); // Copiamos el objeto usando Object.assign()
obj5.greeting = "Hola de nuevo";
console.log("obj3:", obj3.greeting); // Hola
console.log("obj5:", obj5.greeting); // Hola de nuevo