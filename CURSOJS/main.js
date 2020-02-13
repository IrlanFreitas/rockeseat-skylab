// let xhr = new XMLHttpRequest(); //Ajax

// // https://api.github.com/users/diego3g

// xhr.open("GET", "https://api.github.com/users/diego3g")

// xhr.send(null)

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }   
// }


let minhaPromise = () => {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest()

        xhr.open("GET", "https://api.github.com/users/diego3g")

        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject("Error na requisição")
                }
            }
        }
    })
} 


minhaPromise()
    .then( (response) => {console.log(response);
    } )
    .catch( (error) => {console.warn(error);} )
