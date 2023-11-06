let passwordLength = 11
const inputEl = document.querySelector("#password") 

const  upperCaseCheckEl = document.querySelector("#uppercase-check")
const  numberCheckEl = document.querySelector("#numbers-check")
const  symbolCheckEl = document.querySelector("#symbol-check")


function generatePassword(){
    let chars = "abcdefghjklmnpqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYS"
    const numbersChars = "123456789"
    const symbolChars = "?!@&*()[]"

    if(upperCaseCheckEl.checked){
        chars += upperCaseChars        
    }

    if(numberCheckEl.checked){
        chars += numbersChars        
    }

    if(symbolCheckEl.checked){
        chars += symbolChars        
    }


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
    let tamanhoP = document.querySelector("#password-length-text")
    tamanhoP.innerText = `${passwordLength}`


    generatePassword()
})

upperCaseCheckEl.addEventListener("click", generatePassword)
numberCheckEl.addEventListener("click", generatePassword)
symbolCheckEl.addEventListener("click", generatePassword)


generatePassword()