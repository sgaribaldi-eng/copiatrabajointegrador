let formulario = document.querySelector(".formularioRegistro")
let inputemail = document.querySelector("#email")
let errorMail = document.querySelector(".errormail")

let inputcontraseña = document.querySelector("#password")
let errorContraseña = document.querySelector(".errorcontraseña")

let inputrepetir = document.querySelector("#repetirPassword")
let errorRepetir = document.querySelector(".errorrepetir")


formulario.addEventListener("submit", function(e){
    e.preventDefault()

    if (inputemail.value == "") {
        errorMail.innerHTML = `<p>Este campo es obligatorio</p>`
        errorMail.style.display = "block"
    } else if (inputcontraseña.value == "") {
        errorContraseña.innerHTML = `<p>Este campo es obligatorio</p>`
        errorContraseña.style.display = "block"
    } else if (inputcontraseña.value.length < 6 ) {
        errorContraseña.innerHTML = `<p>La contraseña debe tener al menos 6 caracteres</p>`
        errorContraseña.style.display = "block"
    } else if (inputrepetir.value != inputcontraseña.value) {
        errorRepetir.innerHTML = `<p>Las contraseñas no coinciden</p>`
        errorRepetir.style.display = "block"
    } else {
        this.submit()
    }

})