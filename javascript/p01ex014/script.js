let res = document.getElementById("resultado")
let frase = document.getElementById("frase")

function fechar() {
    res.style.visibility = "hidden"
}

function converter() {
    let real = Number(document.getElementById("real").value)
    let dolar = real / 5.59
    frase.innerHTML = `R$${real.toFixed(2)} corresponde a US$${dolar.toFixed(2)}`
    res.style.visibility = "visible"
    return false
}