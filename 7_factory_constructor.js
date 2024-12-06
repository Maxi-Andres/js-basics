
// Factory Function: Usa una función normal para crear y retornar un objeto
function createPerson(name, age) { //* se suele usar camelCase
    return {
        name, // Propiedad
        age,  // Propiedad
        greet() { // Método
            console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
        }
    };
}

const person1 = createPerson("Maxi", 20);
person1.greet(); // Hola, me llamo Maxi y tengo 20 años.

console.log("Encapsulación en Factory Function:");
function createCounter() {
    let count = 0; // Variable privada (no accesible desde fuera)
    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
console.log(counter.count); //! no se puede modificar ni acceder de una porque es privado debe existir un method

// Constructor Function: Usa `this` y necesita `new` para crear instancias
function Person(name, age) { //* se suele usar PascalCase
    this.name = name; // Propiedad
    this.age = age;   // Propiedad
    this.greet = function () { // Método
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
    };
}

const person2 = new Person("Sofía", 25);
person2.greet(); // Hola, me llamo Sofía y tengo 25 años.

// Uso de Prototype en Constructor Function
Person.prototype.sayBye = function () {
    console.log(`${this.name} dice adiós.`);
};

person2.sayBye(); // Sofía dice adiós.

// Factory Functions:
// Cuando necesitas simplicidad, encapsulación de datos o flexibilidad.
// Ejemplo: Componentes reutilizables o patrones de diseño.

// Constructor Functions:
// Cuando trabajas con muchas instancias de un mismo tipo de objeto y quieres aprovechar prototype para ahorrar memoria.