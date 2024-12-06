// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult
//                 to read. Old pattern to handle asychronous functions. Use promises + async/await to avoid Callback hell

function task1(callback){
    setTimeout(function(){
        console.log("task1");
        callback();
        }, 2000);
}

function task2(callback){
    setTimeout(function(){
        console.log("task2");
        callback()
        }, 1000);
}

function task3(callback){
    setTimeout(function(){
        console.log("task3");
        callback()
        }, 3000);
}

function task4(callback){
    setTimeout(function(){
        console.log("task4");
        callback()
        }, 1500);
}

task1(() => {
    task2(() =>{
        task3(() =>{
            task4(() => console.log("All task completed"));
        });
    });
});

// Este es un ejemplo facil pero cuando hay como 10 o mas se vuelve complicado y es un callback hell de verdad, y hay que evitarlo
// fijate 11.3_promises.js