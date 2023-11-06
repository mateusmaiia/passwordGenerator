let passwordLength = 11
const inputEl = document.querySelector("#password") 

function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYS123456789?!@&*()[]"
    let password = ""

    for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    inputEl.value = password 
}

function copy(){
    navigator.clipboard.writeText(inputEl.value)   //copia um texto de qualquer lugar pra área de transferencia.
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function() {
    passwordLength = passwordLengthEl.value
    generatePassword()
})

generatePassword()