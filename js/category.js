let queryString = location.search
let params = new URLSearchParams(queryString)
let categoria = params.get("categoria")

fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        let contenedor = document.querySelector(".cajaPadreUno")

        let productos = `<h2 class="productosaleatorios">${categoria}</h2>`

        for (let i = 0; i < data.products.length; i++) {

            productos += `

                <article class="producto">
                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}" class="imagenesproductos">
                    <h3>${data.products[i].title}</h3>
                    <p>${data.products[i].description}</p>
                    <p>$${data.products[i].price}</p>
                    <a href="product.html?id=${data.products[i].id}">VER DETALLE</a>
                </article>

            `
        }

        contenedor.innerHTML = productos
    })
    .catch(function(error){
        console.log(error)
    })