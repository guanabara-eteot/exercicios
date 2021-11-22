let saida = document.getElementById("saida")
let frase = document.getElementById("frase")
let sexo = document.getElementsByName("sexo")

saida.style.visibility = "hidden"

function fechar() {
    saida.style.visibility = "hidden"
}

function descontao() {
    let preco = Number(document.getElementById("preco").value)
    let taxa = 0
    if (sexo[0].checked) {
        taxa = 10        
    } else {
        taxa = 15
    }
    let desc = (preco * taxa) / 100
    let novo = preco - desc
    frase.innerHTML = `A sua compra de R$${preco.toFixed(2)} vai ter ${taxa}% de desconto. No fim, você <strong>pagará apenas R$${novo.toFixed(2)}</strong>`
    saida.style.visibility = "visible"
    return false
}

function mudasexo() {
    if (sexo[0].checked) {
        document.body.style.backgroundColor = "steelblue"
    } else {
        document.body.style.backgroundColor = "palevioletred"
    }
}