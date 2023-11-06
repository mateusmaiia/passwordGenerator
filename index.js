function generatePassword(){
    const chars = "abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS123456789?!@&*()[]"
    let password = ""

    for(let i = 0; i < 8; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    generatePassword()
}