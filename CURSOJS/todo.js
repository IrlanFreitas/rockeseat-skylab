let btn = document.querySelector("button")
let input = document.querySelector("input")
let lista = document.querySelector("ul")
let linkExcluir = document.querySelector("a")

btn.addEventListener("click", (event) => {
    event.preventDefault()

    if (input.value !== "") {
        adicionarTodo(input.value)
    }
    
})


const adicionarTodo = (text) => {
    
    let itemLista = document.createElement("li")
    let excluirItemLista = document.createElement("a")
    excluirItemLista.textContent = "Excluir"
    excluirItemLista.setAttribute("href", "#")

    itemLista.textContent = text + " "
    itemLista.appendChild(excluirItemLista)

    lista.appendChild(itemLista)
    input.value = ""
}

linkExcluir.addEventListener("click", (event) => {
    event.preventDefault()
    
})