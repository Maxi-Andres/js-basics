// Random password generator

function generatePassword(password_Lenght, Lowercase, Uppercase, numbers, Symbols){ 

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!#$%&/()=?¡@¨*][{}-._:,;";

    let allowedChars = "";
    let password = "";

    allowedChars += Lowercase ? lowercaseChars : "";
    allowedChars += Uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += Symbols ? symbolsChars : "";

    if(password_Lenght <= 0){
        return "Password lenght must be at least 1";
    }
    if(allowedChars.length === 0){
        return "At least 1 set of characters needs to be selected";
    }

    for(let i = 0; i < password_Lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length); 
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);