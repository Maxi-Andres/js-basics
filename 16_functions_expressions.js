const number = [1, 2, 3, 4, 5, 6];

// 1. Usar función anónima en map
const squares1 = number.map(function(element) {
    return Math.pow(element, 2);
});
console.log('1. Función anónima:', squares1);

// 2. Usar función nombrada
function square(element) {
    return Math.pow(element, 2);
}
const squares2 = number.map(square);
console.log('2. Función nombrada:', squares2);

// 3. Usar función flecha (Arrow Function)
const squares3 = number.map((element) => Math.pow(element, 2));
console.log('3. Arrow Function:', squares3);

// 4. Arrow Function simplificada usando multiplicación
const squares4 = number.map((element) => element * element);
console.log('4. Arrow Function simplificada:', squares4);

// 5. Arrow Function con un solo parámetro (sin paréntesis)
const squares5 = number.map(element => Math.pow(element, 2));
console.log('5. Arrow Function sin paréntesis:', squares5);

// 6. Usar una expresión de función (Function Expression)
const squareExpression = function(element) {
    return Math.pow(element, 2);
};
const squares6 = number.map(squareExpression);
console.log('6. Expresión de función:', squares6);

// 7. Función de Orden Superior que genera otra función
function createPowerFunction(exp) {
    return function(element) {
        return Math.pow(element, exp);
    };
}
const squares7 = number.map(createPowerFunction(2)); // Elevar al cuadrado
console.log('7. Función de orden superior:', squares7);
