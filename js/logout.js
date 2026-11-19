let botonLogout = document.querySelector(".logout a")

let liLogin = document.querySelector(".login")
let liRegister = document.querySelector(".register")
let liSaludo = document.querySelector(".saludo")
let liLogout = document.querySelector(".logout")

botonLogout.addEventListener("click", function(event) {
    event.preventDefault()

    localStorage.removeItem("email")

    liSaludo.style.display = "none"
    liLogout.style.display = "none"

    liLogin.style.display = "block"
    liRegister.style.display = "block"
})