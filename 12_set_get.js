const humano = {
    _nombre: "pepe",  // Usamos una propiedad privada
    _edad: 45,        // Propiedad privada
    altura: 1.7,
    
    // Getter para nombre
    get nombre() {
        return this._nombre;
    },

    // Setter para nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },

    // Getter para edad
    get edad() {
        return this._edad;
    },

    // Setter para edad
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {  // Validación simple para la edad
            this._edad = nuevaEdad;
        } else {
            console.log("Edad no válida");
        }
    },

    details() {
        return `Se llama ${this.nombre} y tiene ${this.edad} años.`;
    }
};

// Usando los getters y setters
console.log(humano.details());  // "Se llama pepe y tiene 45 años."

// Cambiando el nombre y la edad usando los setters
humano.nombre = "Juan";
humano.edad = 30;

console.log(humano.details());  // "Se llama Juan y tiene 30 años."

// Intentando poner una edad inválida
humano.edad = -5;  // "Edad no válida"
console.log(humano.details());  // "Se llama Juan y tiene 30 años."

// ==================================================================================

const humanoide = {
    nombre: "pepe",
    edad: 45,
    altura: 1.7,

    details() {
        return `Se llama ${this.nombre} y tiene ${this.edad} años.`;
    }
};

// Acceder a las propiedades directamente
console.log(humanoide.details());  // "Se llama pepe y tiene 45 años."

// Modificar las propiedades directamente
humanoide.nombre = "Juan";
humanoide.edad = 30;

console.log(humanoide.details());  // "Se llama Juan y tiene 30 años."

// No hay validación, puedes poner cualquier valor
humanoide.edad = -5;  // No hay control, el valor se asigna directamente
console.log(humanoide.details());  // "Se llama Juan y tiene -5 años."


//Sin get y set: Modificación y acceso directo de las propiedades del objeto. No hay control sobre los valores que se asignan.

//Con get y set: Permiten controlar cómo se accede y modifica una propiedad, aplicar validaciones o lógica adicional y mantener un código más robusto y flexible.
