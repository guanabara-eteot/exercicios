let res = document.getElementById("resultado")
let frase = document.getElementById("frase")

function fechar() {
    res.style.visibility = "hidden"
}

function calcdesconto() {
    let prod = document.getElementById("prod").value
    let preco = Number(document.getElementById("preco").value)
    let desc = Number(document.getElementById("desc").value)

    let reduc = preco * desc / 100
    let novo = preco - reduc

    frase.innerHTML = `O ${prod}, que custava R$${preco.toFixed(2)}, com ${desc}% de desconto vai baixar R$${reduc} e vai passar a custar R$${novo.toFixed(2)}.`

    res.style.visibility = "visible"
    return false
}