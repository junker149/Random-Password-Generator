const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// set length logic
let passLength = 15

// generator logic


let pass1El = document.querySelector("#pass1-el")
let pass2El = document.querySelector("#pass2-el")

function randomGenerator() {
    return Math.floor(Math.random() * characters.length)
}

function generatePass() {
    let inputEl = document.querySelector("#input-el")
    passLength = inputEl.value
    let temp = ""
    for (let i = 0; i < passLength; i++) {
        temp += characters[randomGenerator()]
    }
    return temp
}

function populatePass() {
    pass1El.textContent = generatePass()
    pass2El.textContent = generatePass()
}
