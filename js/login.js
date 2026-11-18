let formulario = document.querySelector(".formlogin")
let inputemail = document.querySelector("#email")
let inputcontraseña = document.querySelector("#contraseña")

formulario.addEventListener("submit", function(e){
    e.preventDefault()

    if (inputemail.value == "") {
        errorInputName.innerHTML = `<p>El nombre es obligatorio</p>`
        errorInputName.style.display = "block"
    } else {
        errorInputName.style.display = "none"
    }
})