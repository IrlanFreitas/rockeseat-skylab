let btn = document.querySelector("button")
let input = document.querySelector("input")
let lista = document.querySelector("ul")

let todos = [
    "Fazer café",
    "Estudar Javascript",
    "Acessar comunidade da Rocketseat"
]

btn.addEventListener("click", (event) => {
    event.preventDefault()

    if (input.value !== "") {
        addTodo(input.value)
    }
    
})

const addTodo = (text) => {
    
    let itemLista = document.createElement("li")
    let excluirItemLista = document.createElement("a")
    
    excluirItemLista.textContent = "Excluir"
    excluirItemLista.setAttribute("href", "#")
    excluirItemLista.addEventListener("click", (event) => {
        event.preventDefault()
        lista.removeChild(event.target.parentNode)
    })

    itemLista.textContent = text + " "
    itemLista.appendChild(excluirItemLista)

    lista.appendChild(itemLista)
    input.value = ""
}

todos.forEach( todo => addTodo(todo) )
