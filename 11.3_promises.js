// Promise = An object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value" PENDING -> RESOLVED or REJECTED, 
//           new Promise((resolve, reject) => {asynchronous code})

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            } else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

//* Asi seria antes
// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback();
//     }, 1500);
// }

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false; // si uno no se completa no se hacen los otros
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if(trashOut){
                resolve("You take out the trash ♻");
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

//* Esta el la forma mas "pro" de hacerlo usando Async/Await
//  Async = makes a function return a promise
//  Await = makes an async function wait for a promise
//  Allows you to write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters
//  Everything after Await is placed in an event queue
async function doChores() {

    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores")
    } catch(error){
        console.error(error);
    }
}

doChores();


//* Esta manera es mas facil de leer
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//         .then(value => {console.log(value); return takeOutTrash()})
//         .then(value => {console.log(value); console.log("You finished all the chores")})
//         .catch(error => console.error(error));
            // value es lo que te devuelve el resolve


//* Asi seria antes
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores");
//         });
//     })
// });