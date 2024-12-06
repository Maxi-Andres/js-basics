function dividir(a, b) {
    try {
        // Intentamos realizar la división
        if (b === 0) {
            // Si el denominador es 0, lanzamos un error
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        // Si ocurre un error, lo capturamos aquí
        console.log("Error: " + error.message);  // Mostramos el mensaje del error
    }
}

// Ejemplo con una división válida
let resultado1 = dividir(10, 2);
console.log("Resultado 1:", resultado1);  // 5

// Ejemplo con una división por cero (esto generará un error)
let resultado2 = dividir(10, 0);
console.log("Resultado 2:", resultado2);  // No se llega a mostrar el resultado, se captura el error

let resultado3 = dividir(10, "a");
console.log("Resultado 3:", resultado3);