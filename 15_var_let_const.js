function display() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(`aca: ${i}`); // aca te deja llamarla porque var es scope de function
}

display();

//console.log(i); aca no lo puedo llamar porque esta dentro de la funcion 

function display2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log(`aca: ${i}`); Esto es error porque let es de scope de bloque
}

display2();

//console.log(i); aca tampoco...
