axios.get("https://api.github.com/users/diego3g")
    .then( response => console.log(response))
    .catch( response => console.warn(response))