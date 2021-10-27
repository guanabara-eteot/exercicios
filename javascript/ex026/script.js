let saida = document.getElementById("saida")
let result = document.getElementById("resultado")
let msg = document.getElementById("mensagem")

saida.style.visibility = "hidden"

function fechar() {
    saida.style.visibility = "hidden"
}

function comparar() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    result.innerHTML = `Comparando os valores ${n1} e ${n2}`
    if (n1 > n2) {
        msg.innerHTML = `O valor ${n1} é maior que ${n2}.`
    } else if (n1 < n2) {
        msg.innerHTML = `O valor ${n1} é menor que ${n2}.`
    } else if (n1 == n2) {
        msg.innerHTML = `Os dois valores são iguais.`
    }
    saida.style.visibility = "visible"
    return false
}