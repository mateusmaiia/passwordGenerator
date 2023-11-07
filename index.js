let passwordLength = 11
const inputEl = document.querySelector("#password") 
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")

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

    calculateQuality()
    calculateFontSize()
}

function calculateQuality(){
       // T*0.25 + M*0.15 + N*0.25 + S*0.35 = 100
       const percent = Math.round(
        (passwordLength / 64) * 25 +
         (upperCaseCheckEl.checked ? 15 : 0) +
          (numberCheckEl.checked ? 25 : 0) +
           (symbolCheckEl.checked ? 35 : 0)
        )

       console.log(percent)

       securityIndicatorBarEl.style.width = `${percent}%`

       if(percent > 69  ){
            //safe
            securityIndicatorBarEl.classList.remove('critical')
            securityIndicatorBarEl.classList.remove('warning')
            securityIndicatorBarEl.classList.add('safe')
       }else if(percent > 50){
            //warning
            securityIndicatorBarEl.classList.remove('critical')
            securityIndicatorBarEl.classList.remove('safe')
            securityIndicatorBarEl.classList.add('warning')
       }else{
            //critical
            securityIndicatorBarEl.classList.remove('safe')
            securityIndicatorBarEl.classList.remove('warning')
            securityIndicatorBarEl.classList.add('critical')
       }

       if(percent >= 100){
        securityIndicatorBarEl.classList.add("completed")
       }else{
        securityIndicatorBarEl.classList.remove("completed")
       }
}

function calculateFontSize (){
    if(passwordLength > 45){
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.add("font-xxs")
    }else if(passwordLength > 32){
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xxs")
        inputEl.classList.add("font-xs")
    }else if(passwordLength > 22){
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
        inputEl.classList.add("font-sm")
    }else{
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
    }
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

document.querySelector("#renew").addEventListener("click", generatePassword)

generatePassword()
