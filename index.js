function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYS123456789?!@&*()[]"
    let password = ""

    for(let i = 0; i < 8; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    const inputEl = document.querySelector("#password") 
    inputEl.value = password
}

generatePassword()