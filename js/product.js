let queryString = new URLSearchParams(location.search)

let id = queryString.get("id")

console.log(id)



fetch("https://dummyjson.com/products/" + id)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })


 