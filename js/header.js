let formularioBuscador = document.querySelector(".formularios form")
let inputBuscador = document.querySelector(".buscadorheader input")

formularioBuscador.addEventListener("submit", function(e){
    e.preventDefault()

    if (inputBuscador.value == "") {
        alert("El campo de búsqueda no puede estar vacío.")
    } else if (inputBuscador.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres")
    } else {
        this.submit()
    }

})


let listaCategorias = document.querySelector(".navcategorias ul")

if (listaCategorias != null) {

    fetch("https://dummyjson.com/products/categories")
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            let categorias = ""

            for (let i = 0; i < data.length; i++) {

                categorias += `<li><a href="category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`
            }

            listaCategorias.innerHTML = categorias
        })
        .catch(function(error){
            console.log(error)
        })

}
