let saida = document.getElementById("saida")
let frase = document.getElementById("frase")
saida.style.visibility = "hidden"

function fechar() {
    saida.style.visibility = "hidden"
}

function situacao() {
    let nome = document.getElementById("nome").value
    let nota1 = Number(document.getElementById("n1").value)
    let nota2 = Number(document.getElementById("n2").value)

    let media = (nota1 + nota2) / 2
    let situacao = ""

    if (media < 4) {
        situacao = "<span class='tipo1'>REPROVADO</span>"
    } else if (media >= 4 && media < 7) {
        situacao = "<span class='tipo2'>EM RECUPERAÇÃO</span>"
    } else if (media >= 7) {
        situacao = "<span class='tipo3'>APROVADO</span>"
    }

    frase.innerHTML = `O aluno ${nome} obteve <strong>média ${media}</strong> e por conta disso está ${situacao}`
    saida.style.visibility = "visible"
    return false
}