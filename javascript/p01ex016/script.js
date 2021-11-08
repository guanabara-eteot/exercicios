res = document.getElementById("saida")
frase = document.getElementById("frase")
res.style.visibility = "hidden"

function fechar() {
    res.style.visibility = "hidden"
}

function reajustar() {
    let nome = document.getElementById("nome").value
    let sal = Number(document.getElementById("sal").value)
    let reaj = Number(document.getElementById("reaj").value)

    let aum = sal * reaj / 100
    let novo = sal + aum

    res.style.visibility = "visible"
    frase.innerHTML = `O funcionário <strong>${nome}</strong> tinha o salário de R$${sal.toFixed(2)}. Com um aumento de ${reaj}%, o salário vai aumentar R$${aum.toFixed(2)} e vai passar a ser de <strong>R$${novo.toFixed(2)}</strong>`

    return false
}