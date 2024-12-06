// Definición de un objeto llamado "person"
let person = {
    name: "Maxi",
    age: 20,
    greet: function() {
        console.log("Hola, mi nombre es " + this.name);  // Método que usa 'this'
    },  //! this no funciona en arrows functions
    // Método abreviado (ES6)
    greetShort() {
        console.log("¡Hola, soy " + this.name + "!");
    },
    toString() {  // Sobrescribir el método toString
        return `Soy ${this.name} y tengo ${this.age} años.`;
    }
};

// Imprimir el objeto completo
console.log(person);  // { name: "Maxi", age: 20, greet: f, greetShort: f }

// Acceder a propiedades utilizando la notación de punto
console.log(person.name);  // "Maxi"
console.log(person.age);   // 20

// Acceder a propiedades utilizando la notación de corchetes
console.log(person["name"]);  // "Maxi"

// Usar una variable para acceder a propiedades
let property = "name";
console.log(person[property]);  // "Maxi"

// Llamar a un método
person.greet();  // "Hola, mi nombre es Maxi"
person.greetShort();  // "¡Hola, soy Maxi!"

// Modificar propiedades
person.name = "Juan";  // Cambiar el valor de "name"
console.log(person.name);  // "Juan"

// Agregar nuevas propiedades
person.country = "Argentina";  // Se agrega la propiedad "country"
console.log(person.country);  // "Argentina"

// Eliminar propiedades
delete person.age;  // Elimina la propiedad "age"
console.log(person);  // { name: "Juan", country: "Argentina" }

// Accediendo a propiedades que no existen
console.log(person.city);  // undefined

// ========================================================================================

// Objetos anidados
let personWithAddress = {
    name: "Maxi",
    address: {
        city: "Buenos Aires",
        street: "Av. 9 de Julio"
    }
};
console.log(personWithAddress.address.city);  // "Buenos Aires"

// Desestructuración de objetos
let { name, country } = person;
console.log(name);  // "Juan"
console.log(country);  // "Argentina"

// Desestructuración con renombrado
let { name: fullName, country: nation } = person;
console.log(fullName);  // "Juan"
console.log(nation);    // "Argentina"

// Spread Operator
let personCopy = { ...person };  // Copia de person
console.log(personCopy);  // { name: "Juan", country: "Argentina" }

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person));  // ["name", "country"]
console.log(Object.values(person));  // ["Juan", "Argentina"]
console.log(Object.entries(person));  // [["name", "Juan"], ["country", "Argentina"]]

// Comprobando si una propiedad existe
console.log("name" in person);  // true
console.log(person.hasOwnProperty("age"));  // false
console.log("city" in person);  // false


//clases anidadas y uso del spreed operator (...)
class PersonNested{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new AddressNested(...address);
    }
}

class AddressNested{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const nesterPerson1 = new PersonNested("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");


// ========================================================================================

//! Función constructora de objetos 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("Maxi", 20);
let person2 = new Person("Juan", 25);
console.log(person1.name);  // "Maxi"
console.log(person2.name);  // "Juan"

// Object.assign() para copiar propiedades
let additionalInfo = { city: "Buenos Aires", country: "Argentina" };
let personWithInfo = Object.assign({}, person, additionalInfo);
console.log(personWithInfo);  // { name: "Juan", country: "Argentina", city: "Buenos Aires" }

// Sobrescribir el método toString() para personalizar la salida
console.log(person.toString());  // "Soy Juan y tengo 20 años."

// El uso de 'this' en métodos
person.greet();  // "¡Hola, soy Juan!" (Usa 'this' para acceder a la propiedad 'name')

// Contexto global de 'this' (función fuera de un objeto)
let greetFunction = person.greet;
greetFunction();  // undefined (en modo estricto sería "undefined")

// Explicación de conceptos dentro del código:
// Objetos: Los objetos pueden tener propiedades y métodos. Las propiedades se acceden con notación de punto (person.name) o notación de corchetes (person["name"]).
// Métodos: Funciones que están dentro de los objetos. Pueden ser definidas de forma estándar o abreviada.
// Desestructuración: Se utiliza para extraer valores de un objeto y asignarlos a variables de manera concisa.
// Spread Operator: Permite copiar propiedades de un objeto a otro.
// Object.keys(), Object.values(), Object.entries(): Métodos que permiten trabajar con las propiedades de los objetos.
// Comprobación de propiedades: Se utiliza el operador in o hasOwnProperty() para verificar la existencia de una propiedad en un objeto.
//! Funciones constructoras: Permiten crear múltiples instancias de un objeto con la misma estructura.
// Object.assign(): Copia propiedades de un objeto a otro.
// this: Hace referencia al objeto al que pertenece el método. En funciones fuera de un objeto, su valor puede ser diferente dependiendo del contexto.