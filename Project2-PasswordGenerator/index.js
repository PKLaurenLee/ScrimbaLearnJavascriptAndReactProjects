const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">", ".", "?", "/"];
var passwordLength = 10;
const passwordElements = document.getElementsByClassName("password-button");
const passwordLengthLabel = document.getElementById("length-label");

function generatePasswords() {
    for (const passwordEl of passwordElements) {
        // Clear the existing content
        passwordEl.innerHTML = "";
        // Append the tooltip to the button
        passwordEl.appendChild(createTooltip("Copy to clipboard"));

        // Create the password text node
        const passwordText = document.createTextNode(generatePassword());
        // Append the password text to the button
        passwordEl.appendChild(passwordText);
    }
}

function createTooltip(message) {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltiptext";
    tooltip.id = "myTooltip";
    tooltip.innerText = message;

    return tooltip;
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += randomCharacter();
    }
    return password
}

// Return random character from an array.
function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}

// Copies password to clipboard.
function copy(button) {
    console.log(button);
    const childTooltip = button.querySelector(".tooltiptext");
    childTooltip.innerText = "";
    const password = button.innerText;
    navigator.clipboard.writeText(password);
    childTooltip.innerText = "Copied password: " + password;
}

function setLength(value) {
    passwordLength = value;
    passwordLengthLabel.textContent = "Password Length: " + value;
}