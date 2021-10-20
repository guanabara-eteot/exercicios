res = document.getElementById("saida")
frase = document.getElementById("frase")
res.style.visibility = "hidden"

function fechar() {
    res.style.visibility = "hidden"
}

function calcular() {
    let quant = Number(document.getElementById("quant").value)
    let anos = Number(document.getElementById("anos").value)

    let min = anos * 365 * quant
    let horas = min / 60 
    let dias = horas / 24

    res.style.visibility = "visible"
    frase.innerHTML = `Uma pessoa que fuma ${quant} cigarros por dia, há ${anos} anos já <strong>perdeu ${horas.toFixed(1)} horas de vida</strong>! Isso corresponde a ${dias.toFixed(1)} dias a menos.`

    return false
}