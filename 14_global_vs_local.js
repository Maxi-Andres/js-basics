// Variable en el scope global
let nombreGlobal = "Juan";

function saludo() {
    // Variable en el scope local (dentro de la función)
    let nombreLocal = "Ana";

    console.log("Dentro de la función:");
    console.log("Nombre global:", nombreGlobal);  // Accede a la variable global
    console.log("Nombre local:", nombreLocal);   // Accede a la variable local
}

saludo();  // Llama a la función saludo

console.log("Fuera de la función:");
console.log("Nombre global:", nombreGlobal);  // Accede a la variable global
//console.log("Nombre local:", nombreLocal);  //! ERROR: No se puede acceder a la variable local fuera de la función

let mensajeGlobal = "¡Hola desde el scope global!";

function funcionExterna() {
    let mensajeLocal = "¡Hola desde el scope local!";

    function funcionInterna() {
        console.log(mensajeGlobal);  // Accede al scope global
        console.log(mensajeLocal);   // Accede al scope local
    }

    funcionInterna();  // Llamada a la función interna
}

funcionExterna();  // Llama a la función externa
