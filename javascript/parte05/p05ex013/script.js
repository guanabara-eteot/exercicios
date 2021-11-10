let saida = document.getElementById("saida")
let titulo = document.getElementById("titulo")
let mensagem = document.getElementById("mensagem")

saida.style.visibility = "hidden"

function cadastro() {
    let total = Number(document.getElementById("total").value)
    
    let idade = 0
    let soma = 0
    let media = 0

    let cont = 1
    while (cont <= total) {
        idade = Number(prompt(`Idade da ${cont}a pessoa`))
        soma += idade
        cont ++
    }

    media = soma / total
    titulo.innerHTML = `${total} pessoas cadastradas`
    mensagem.innerHTML = `No grupo cadastrado, a média de idade é de <strong>${media.toFixed(1)} anos.</strong>`

    saida.style.visibility = "visible"
    return false
}