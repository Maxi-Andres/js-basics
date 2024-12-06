// Error = An object that is created to represent a problem that occurs often with user input or establishing a connection
// Network errors
// Promise rejection
// Security errors

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes, used mostly for clean up ax, close files, close connections, release resources

try{
    console.log(x);

}
catch(error){
    console.error("El error es: " + error);
}
finally{
    //close connections
    //close files
    //release resources
}

try{
    const dividend = 10;
    const divisor = "a";

    if(divisor === 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be numbers!");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error + ""); // le agrego "" para que solo imprima el error sino tambien imprime todo un parrafo
}

console.log("You have reached the end!");