let formulario = document.querySelector(".formlogin")
let inputemail = document.querySelector("#email")
let errorMail = document.querySelector(".errormail")

let inputcontraseña = document.querySelector("#contraseña")
let errorContraseña = document.querySelector(".errorcontraseña")


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
    } else {
        localStorage.setItem("email", inputemail.value)
        this.submit()
    }
  
})