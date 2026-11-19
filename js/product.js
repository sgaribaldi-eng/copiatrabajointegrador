let queryString = new URLSearchParams(location.search)

let id = queryString.get("id")

console.log(id)



fetch("https://dummyjson.com/products/" + id)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        document.querySelector("#nombreProducto").innerText = data.title
        document.querySelector("#imagenProducto").src = data.thumbnail
        document.querySelector("#marcaProducto").innerText = data.brand
        document.querySelector("#descripcionProducto").innerText = data.description
        document.querySelector("#precioProducto").innerText = data.price

        document.querySelector("#categoriaProducto").innerText = data.category
        document.querySelector("#categoriaProducto").href = "category.html?categoria=" + data.category

        document.querySelector("#stockProducto").innerText = data.stock
        let tags = data.tags
        for (let i = 0; i < tags.length; i++) {
            document.querySelector("#tagsProducto").innerHTML += "<li>" + tags[i] + "</li>"
}
        let reviews = data.reviews
        for (let i = 0; i < reviews.length; i++) {
            document.querySelector("#listaReviews").innerHTML += 
            "<article class='review'>" +
                "<h3>" + reviews[i].reviewerName + "</h3>" +
                "<p><strong>Rating:</strong> " + reviews[i].rating + "</p>" +
                "<p>" + reviews[i].comment + "</p>" +
                "<p><strong>Fecha:</strong> " + reviews[i].date + "</p>" +
            "</article>"
}
    })
    .catch(function(error){
        console.log(error)
    })


 