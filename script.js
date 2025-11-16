document.addEventListener("DOMContentLoaded",() => {
    const lengthInput = document.getElementById("length");
    const passwordDisplay = document.getElementById("password");
    const button = document.getElementById("submit");

    const includeLowercase = document.getElementById("lowercase");
    const includeUppercase = document.getElementById("uppercase");
    const includeNumbers = document.getElementById("numbers");
    const includeSymbols = document.getElementById("symbols");

    button.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);

        if(isNaN(length) || length < 1) {
            passwordDisplay.textContent = "Enter a valid length";
            return;
        }

        const password = generatePassword({
            length,
            lowercase: includeLowercase.checked,
            uppercase: includeUppercase.checked,
            numbers: includeNumbers.checked,
            symbols: includeSymbols.checked
        });
        passwordDisplay.textContent = password;
    });

    function generatePassword(options){
        let charset = "";

        if(options.lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if(options.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(options.numbers) charset += "0123456789";
        if(options.symbols) charset += "!@#$%^&*()";

        if(charset.length === 0) {
            return "Select at least one option";
        }

        let password = "";

    for(let i=0; i < options.length;i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
    }

});



