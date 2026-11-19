let queryString = location.search
let params = new URLSearchParams(queryString)
let busqueda = params.get("q")

console.log(busqueda)

let titulo = document.querySelector(".tituloBusqueda")
let contenedor = document.querySelector(".productosEncontrados")

fetch(`https://dummyjson.com/products/search?q=${busqueda}`) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)

        let productos = data.products

        if (productos.length == 0) {
            titulo.innerHTML = `<h1>Resultados de busqueda</h1>
            <p>No hay resultados para el término: "<strong>${busqueda}</strong>"</p>`
        } else {
            titulo.innerHTML = `<h1>Resultados de busqueda</h1>
            <p>Resultados para: "<strong>${busqueda}</strong>"</p>`

             let resultados = ""

             for (let i = 0; i < productos.length; i++) {
                resultados += `<article>
                                <img src="${productos[i].thumbnail}" alt="${productos[i].title}" class="imagenResultado">
                                <h3>${productos[i].title}</h3>
                                <p>${productos[i].description}</p>
                                <p>$${productos[i].price}</p>
                                <a href="product.html?id=${productos[i].id}" class="asearch">VER DETALLE</a>
                            </article>` 
            }

             contenedor.innerHTML = resultados
        }
    })
    .catch(function(error) {
        console.log(error)
    }) 
