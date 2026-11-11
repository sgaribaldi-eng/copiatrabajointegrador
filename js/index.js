fetch("https://dummyjson.com/products/category/home-decoration")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        let contenedor = document.querySelector(".contenedorProductos1")

        let productos = ""

        for (let i = 0; i < data.products.length; i++) {

            productos += `
        
                <article class="producto">
                    <img src="${data.products[i].thumbnail}" alt="sillonoslo" class="imagenesproductos">
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