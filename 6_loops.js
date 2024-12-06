// Declaramos un array para usar en los ejemplos
let numbers = [1, 2, 3, 4, 5];

// 1. Uso de for clásico
console.log("For clásico:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Uso de for...of para recorrer elementos directamente
console.log("For...of:");
for (let number of numbers) {
    console.log(number);
}

// 3. Uso de for...in para obtener índices
console.log("For...in:");
for (let index in numbers) { //index es la key que usas
    console.log(`Índice: ${index}, Valor: ${numbers[index]}`);
}

// 4. Uso de while
console.log("While:");
let idx = 0;
while (idx < numbers.length) {
    console.log(numbers[idx]);
    idx++;
}

// 5. Uso de while infinito con break
console.log("While infinito con break:");
let sum = 0;
while (true) {
    console.log(`Suma: ${sum}`);
    sum++;
    if (sum === 5) break; // Detenemos el loop cuando sum llega a 5
}

// 6. Uso de do...while (siempre se ejecuta al menos una vez)
console.log("Do...while:");
let count = 0;
do {
    console.log(`Contador: ${count}`);
    count++;
} while (count < 3);

// 7. Uso de forEach (método de arrays)
console.log("ForEach:");
numbers.forEach((num, index) => {
    console.log(`Índice: ${index}, Valor: ${num}`);
});

// 8. Uso de map para transformar arrays
console.log("Map:");
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// 9. Loop anidado (ejemplo: tabla de multiplicar)
console.log("Loop anidado:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 10. Uso de continue para saltar iteraciones
console.log("Uso de continue:");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Saltamos la iteración donde i es 2
    console.log(i);
}

// 11. Loop infinito con control manual (solo como ejemplo)
console.log("Loop infinito controlado manualmente:");
let infiniteIdx = 0;
while (true) {
    console.log(infiniteIdx);
    infiniteIdx++;
    if (infiniteIdx === 3) break; // Detenemos el loop
}

// 12. Uso de filter para filtrar elementos
console.log("Filter:");
let evenNumbers = numbers.filter(num => num % 2 === 0); // Filtra números pares
console.log(`Números pares: ${evenNumbers}`);

// 13. Uso de reduce para acumular valores
console.log("Reduce:");
let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Suma de los números: ${sumOfNumbers}`);

