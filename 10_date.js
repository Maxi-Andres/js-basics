// Crear una nueva fecha (fecha y hora actual)
let currentDate = new Date();
console.log(currentDate); // Ejemplo: "2024-11-18T12:34:56.789Z"

// Crear una fecha específica (año, mes, día, hora, minutos, segundos)
let specificDate = new Date(2024, 10, 18, 12, 30, 0); // Meses empiezan desde 0 (enero = 0)
console.log(specificDate); // Ejemplo: "2024-11-18T12:30:00.000Z"

// Obtener los componentes de la fecha
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Recuerda que los meses empiezan desde 0
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(`Año: ${year}, Mes: ${month + 1}, Día: ${day}, Hora: ${hours}:${minutes}:${seconds}`);

// Establecer una nueva fecha (modificarla)
currentDate.setFullYear(2025);
currentDate.setMonth(5); // Junio (mes 5)
currentDate.setDate(25);
console.log(currentDate); // Ejemplo: "2025-06-25T12:34:56.789Z"

// Comparar fechas
let anotherDate = new Date(2024, 10, 18);
if (specificDate > anotherDate) {
    console.log("La fecha específica es después que la otra fecha.");
} else {
    console.log("La fecha específica es antes o igual que la otra fecha.");
}

// Convertir fecha a formato de cadena
let dateString = currentDate.toDateString();
let timeString = currentDate.toTimeString();
console.log("Fecha en formato de cadena:", dateString); // Ejemplo: "Mon Nov 18 2024"
console.log("Hora en formato de cadena:", timeString); // Ejemplo: "12:34:56 GMT+0000 (Coordinated Universal Time)"

// Obtener el timestamp (milisegundos desde el 1 de enero de 1970)
let timestamp = currentDate.getTime();
console.log("Timestamp:", timestamp);



