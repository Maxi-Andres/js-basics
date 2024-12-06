// Crear un array
let fruits = ["apple", "banana", "orange", "mango"];

// Acceder a un elemento por su índice
console.log(fruits[0]);  // "apple"
console.log(fruits[2]);  // "orange"

// Cambiar el valor de un elemento
fruits[1] = "blueberry";
console.log(fruits);  // ["apple", "blueberry", "orange", "mango"]

// Añadir elementos al final del array
fruits.push("pineapple");
console.log(fruits);  // ["apple", "blueberry", "orange", "mango", "pineapple"]

// Eliminar el último elemento del array
fruits.pop();
console.log(fruits);  // ["apple", "blueberry", "orange", "mango"]

// Añadir elementos al principio del array
fruits.unshift("strawberry");
console.log(fruits);  // ["strawberry", "apple", "blueberry", "orange", "mango"]

// Eliminar el primer elemento del array
fruits.shift();
console.log(fruits);  // ["apple", "blueberry", "orange", "mango"]

// Encontrar el índice de un elemento
let index = fruits.indexOf("orange");
console.log(index);  // 2
// tambien esta .lastIndexOf y devuelve la ultima vez que aparece
//! si devuelve -1 es que no esta precente

// Verificar si un array contiene un elemento
console.log(fruits.includes("banana"));  // false
console.log(fruits.includes("orange"));  // true

// Filtrar elementos del array
let filteredFruits = fruits.filter(fruit => fruit.startsWith("m"));
console.log(filteredFruits);  // ["mango"]

// Mapear el array (transformar elementos)
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits);  // ["APPLE", "BLUEBERRY", "ORANGE", "MANGO"]

// Iterar sobre un array
fruits.forEach(fruit => {
    console.log(fruit);  // Imprime cada fruta en el array
});

// Combinando arrays
let vegetables = ["carrot", "broccoli"];
let food = fruits.concat(vegetables);
console.log(food);  // ["apple", "blueberry", "orange", "mango", "carrot", "broccoli"]

// Encontrar el primer elemento que cumpla con una condición
let firstFruitWithO = fruits.find(fruit => fruit.includes("o"));
console.log(firstFruitWithO);  // "orange"

// Comprobar si algún elemento cumple con una condición
let hasBerry = fruits.some(fruit => fruit.includes("berry"));
console.log(hasBerry);  // true

// Reducir el array (acumular un valor)
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength);  // Total de la longitud de todos los nombres de frutas

// Ordenar el array alfabéticamente
fruits.sort();
console.log(fruits);  // ["apple", "blueberry", "mango", "orange"]

// Invertir el orden del array
fruits.reverse();
console.log(fruits);  // ["orange", "mango", "blueberry", "apple"]

//!array.splice(start, deleteCount, item1, item2, ...);

// Eliminar 1 elemento en el índice 1 (en este caso "blueberry")
fruits.splice(1, 1);
console.log(fruits);  // ["orange", "blueberry", "apple"]

// Agregar un nuevo elemento en el índice 1
fruits.splice(1, 0, "kiwi");
console.log(fruits);  // ["orange", "kiwi", "blueberry", "apple"]

// Reemplazar 1 elemento en el índice 2 con "pear"
fruits.splice(2, 1, "pear");
console.log(fruits);  // ["orange", "kiwi", "pear", "apple"]

// Elimina todos los valores del array
fruits.splice(0, fruits.length);
console.log(fruits);

// Convierte un array en una list
array = [1, 2, 3, 4, 5, 6]
const jointedNums = array.join("-")
console.log(jointedNums)

const sum = array.reduce((accumulator, currentValue) => { return accumulator + currentValue})
console.log(sum)

let fruits2 = ["apple", "banana", "orange", "mango"];

// Usando every()
let allFruitsHaveA = fruits2.every(fruit => fruit.includes('a'));
console.log(allFruitsHaveA);  // false (no todas las frutas contienen la letra "a")

// Usando fill()
fruits2.fill("kiwi", 1, 3);  // Cambiar valores en el rango de índices 1 a 3
console.log(fruits2);  // ["apple", "kiwi", "kiwi", "mango"]

// Usando flat()
let nestedArray = [1, [2, 3], [4, 5]];
let flatArray = nestedArray.flat();
console.log(flatArray);  // [1, 2, 3, 4, 5]
