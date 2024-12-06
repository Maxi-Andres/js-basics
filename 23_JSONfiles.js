// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        Typical JSON structure: {key: value} or [value1, value2, value3]

//!       JSON.stringify() = converts a JavaScript object to a JSON string
//!       JSON.parse() = converts a JSON string to a JavaScript object

//! Se tiene que usar en una pagina si o si, sino no anda

fetch("23.2_names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));

fetch("23.3_person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));

fetch("23.4_people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));
