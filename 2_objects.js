// Definición de un objeto llamado "person"
let person = {
    name: "Maxi",  // Propiedad "name" con valor "Maxi"
    age: 20        // Propiedad "age" con valor 20
};

// Imprimir el objeto completo
console.log(person);  // { name: "Maxi", age: 20 }

// Acceder a una propiedad utilizando la notación de punto
console.log(person.name);  // "Maxi"
console.log(person.age);   // 20

// Acceder a una propiedad utilizando la notación de corchetes
console.log(person["name"]);  // "Maxi"

// Usando una variable para acceder a la propiedad
let cosa = "name";  // La variable "cosa" contiene el nombre de la propiedad

console.log(person[cosa]);  // "Maxi", accede a "name" a través de la variable "cosa"

//* Podemos cambiar las propiedades de un objeto porque en JavaScript los objetos son dinamicos
person.name = "Juan";  // Modificando el valor de la propiedad "name"
console.log(person.name);  // "Juan"

// Agregar nuevas propiedades al objeto //* lo mismo
person.country = "Argentina";  // Se agrega la propiedad "country"
console.log(person.country);  // "Argentina"

// Eliminar una propiedad de un objeto //* lo mismo
delete person.age;  // Elimina la propiedad "age"
console.log(person);  // { name: "Juan", country: "Argentina" }
