// Definir una cadena
let str = "  Hello, World!  ";

// length - Devuelve la longitud de la cadena
console.log(str.length); // 17

// charAt() - Devuelve el carácter en una posición específica
console.log(str.charAt(0)); // ' ' (espacio)

// toUpperCase() - Convierte toda la cadena a mayúsculas
console.log(str.toUpperCase()); // '  HELLO, WORLD!  '

// toLowerCase() - Convierte toda la cadena a minúsculas
console.log(str.toLowerCase()); // '  hello, world!  '

// trim() - Elimina los espacios en blanco de los extremos de la cadena
console.log(str.trim()); // 'Hello, World!'

// includes() - Verifica si una subcadena está presente
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (es sensible a mayúsculas/minúsculas)

// indexOf() - Devuelve la posición de la primera aparición de una subcadena
console.log(str.indexOf("World")); // 8
// esta tambien lastIndexOf()

// substring() - Extrae una porción de la cadena (sin modificar la original)
console.log(str.substring(2, 7)); // 'Hello'

// slice() - Similar a substring(), pero también puede aceptar índices negativos
console.log(str.slice(-6)); // 'World!  ' (últimos 6 caracteres)
console.log(str.slice(0,3)); // Wor

// replace() - Reemplaza la primera aparición de una subcadena
console.log(str.replace("World", "JavaScript")); // '  Hello, JavaScript!  '
// esta replaceAl tambien

// split() - Divide una cadena en un arreglo de subcadenas
let words = str.split(" ");
console.log(words); // ['Hello,', 'World!']

// startsWith() - Verifica si la cadena comienza con una subcadena
console.log(str.startsWith("  Hello")); // true

// endsWith() - Verifica si la cadena termina con una subcadena
console.log(str.endsWith("World!  ")); // true

// repeat() - Devuelve una nueva cadena con la cadena original repetida un número específico de veces
console.log("abc".repeat(3)); // 'abcabcabc'

let name = "Maxi";
let age = 20;

// Forma tradicional
let greeting1 = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting1); // "Hello, my name is Maxi and I am 20 years old."

// Usando Template Literals //!(con backticks `)
let greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting2); // "Hello, my name is Maxi and I am 20 years old."
