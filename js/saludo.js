let email = localStorage.getItem("email")

let itemLogin = document.querySelector(".login")
let itemRegister = document.querySelector(".register")
let itemSaludo = document.querySelector(".saludo")
let itemLogout = document.querySelector(".logout")

if (email != null) {
    itemSaludo.innerText = `Bienvenido: ${email}`
    itemLogin.style.display = "none"
    itemRegister.style.display = "none"
} else {
    itemSaludo.style.display = "none"
    itemLogout.style.display = "none"
}